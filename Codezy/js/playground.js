import { 
    auth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    db,
    doc,
    setDoc,
    getDoc
} from './firebase-config.js';

// المستخدم الحالي
let currentUser = null;
let userPlan = 'free';

// ========== مراقبة حالة تسجيل الدخول ==========
export function initAuth() {
    onAuthStateChanged(auth, async (user) => {
        currentUser = user;
        if (user) {
            await loadUserData(user.uid);
            updateUIForLoggedIn(user);
        } else {
            updateUIForLoggedOut();
        }
    });
}

// ========== تحميل بيانات المستخدم من Firestore ==========
async function loadUserData(uid) {
    try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
            const data = userDoc.data();
            userPlan = data.plan || 'free';
            localStorage.setItem('user_plan', userPlan);
        } else {
            // إنشاء ملف مستخدم جديد
            await setDoc(doc(db, 'users', uid), {
                email: currentUser.email,
                username: currentUser.displayName || currentUser.email.split('@')[0],
                plan: 'free',
                createdAt: new Date().toISOString(),
                totalLessons: 0,
                completedLessons: 0
            });
            userPlan = 'free';
            localStorage.setItem('user_plan', 'free');
        }
    } catch (error) {
        console.error('Error loading user data:', error);
    }
}

// ========== تحديث واجهة المستخدم ==========
function updateUIForLoggedIn(user) {
    const authLinks = document.getElementById('authLinks');
    const userInfo = document.getElementById('userInfo');
    
    if (authLinks) authLinks.style.display = 'none';
    if (userInfo) {
        userInfo.style.display = 'flex';
        const userNameSpan = document.getElementById('userName');
        if (userNameSpan) {
            userNameSpan.textContent = user.displayName || user.email.split('@')[0];
        }
        updatePlanBadge();
    }
}

function updateUIForLoggedOut() {
    const authLinks = document.getElementById('authLinks');
    const userInfo = document.getElementById('userInfo');
    
    if (authLinks) authLinks.style.display = 'flex';
    if (userInfo) userInfo.style.display = 'none';
    
    localStorage.removeItem('user_plan');
    userPlan = 'free';
}

function updatePlanBadge() {
    const planBadge = document.getElementById('userPlan');
    if (planBadge) {
        const planNames = { free: 'مجاني', pro: 'احترافي', premium: 'بريميوم' };
        planBadge.textContent = planNames[userPlan] || 'مجاني';
        planBadge.className = `plan-badge ${userPlan}`;
    }
}

// ========== دوال المصادقة ==========
export async function login(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        showToast('✅ تم تسجيل الدخول بنجاح');
        return result;
    } catch (error) {
        let message = '❌ خطأ في تسجيل الدخول';
        if (error.code === 'auth/user-not-found') message = '❌ المستخدم غير موجود';
        if (error.code === 'auth/wrong-password') message = '❌ كلمة المرور غير صحيحة';
        if (error.code === 'auth/invalid-email') message = '❌ البريد الإلكتروني غير صالح';
        showToast(message, 'error');
        throw error;
    }
}

export async function signup(email, password, username) {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(result.user, { displayName: username });
        
        // إنشاء ملف المستخدم في Firestore
        await setDoc(doc(db, 'users', result.user.uid), {
            email: email,
            username: username,
            plan: 'free',
            createdAt: new Date().toISOString(),
            totalLessons: 0,
            completedLessons: 0
        });
        
        showToast('🎉 تم إنشاء الحساب بنجاح');
        return result;
    } catch (error) {
        let message = '❌ خطأ في إنشاء الحساب';
        if (error.code === 'auth/email-already-in-use') message = '❌ البريد الإلكتروني مستخدم بالفعل';
        if (error.code === 'auth/weak-password') message = '❌ كلمة المرور ضعيفة (6 أحرف على الأقل)';
        showToast(message, 'error');
        throw error;
    }
}

export async function logout() {
    try {
        await signOut(auth);
        showToast('👋 تم تسجيل الخروج بنجاح');
        window.location.reload();
    } catch (error) {
        showToast('❌ خطأ في تسجيل الخروج', 'error');
    }
}

export async function resetPassword(email) {
    try {
        await sendPasswordResetEmail(auth, email);
        showToast('📧 تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك');
    } catch (error) {
        showToast('❌ خطأ في إرسال رابط إعادة التعيين', 'error');
    }
}

export async function updateUserPlan(plan) {
    if (!currentUser) return;
    try {
        await updateDoc(doc(db, 'users', currentUser.uid), {
            plan: plan,
            updatedAt: new Date().toISOString()
        });
        userPlan = plan;
        localStorage.setItem('user_plan', plan);
        updatePlanBadge();
        showToast(`🎉 تم الترقية إلى الباقة ${plan === 'pro' ? 'الاحترافية' : 'البريميوم'} بنجاح`);
    } catch (error) {
        showToast('❌ حدث خطأ أثناء الترقية', 'error');
    }
}

export function getCurrentUser() {
    return currentUser;
}

export function getUserPlan() {
    return userPlan;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: ${type === 'error' ? '#ff5555' : '#00ff88'};
        color: #0a0a0a;
        padding: 12px 24px;
        border-radius: 30px;
        z-index: 3000;
        font-weight: 500;
        animation: slideUp 0.3s ease;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}