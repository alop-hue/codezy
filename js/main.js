// منع الأخطاء المرتبطة باللمس
let isScrolling = false;

// منع الأخطاء غير الحرجة
window.addEventListener('touchmove', function(e) {
    if (isScrolling) {
        // السماح بالتمرير الطبيعي
        return;
    }
}, { passive: true });

window.addEventListener('touchstart', function(e) {
    // منع التداخل مع القائمة المنسدلة فقط
    const target = e.target;
    if (target.closest('.menu-toggle') || target.closest('.nav-links')) {
        // السماح بالنقر على القائمة
        return;
    }
}, { passive: true });

// Menu Toggle with Animation
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // تغيير الأيقونة
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // منع انتشار حدث النقر داخل القائمة
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Smooth Scrolling (مصلح)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || href === '' || href === '#!' || href === '#0') {
            e.preventDefault();
            return;
        }
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // إغلاق القائمة المتنقلة
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});

// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// استرجاع الثيم المحفوظ
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);

// تحديث أيقونة الثيم
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    updateThemeIcon();
});

// Navbar Background Change on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.style.background = body.classList.contains('dark-mode') 
                ? 'rgba(10, 10, 10, 0.98)' 
                : 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = body.classList.contains('dark-mode') 
                ? 'rgba(10, 10, 10, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// عرض إشعار (Toast)
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// تشغيل الكود المضمن
function runCode(codeId, outputId) {
    const codeElement = document.getElementById(codeId);
    const outputElement = document.getElementById(outputId);
    
    if (!codeElement || !outputElement) return;
    
    let code = codeElement.innerText;
    outputElement.innerHTML = '<div class="output-placeholder"><i class="fas fa-spinner fa-spin"></i><span>جاري التنفيذ...</span></div>';
    
    setTimeout(() => {
        try {
            let result = '';
            let logs = [];
            
            // تحديد نوع اللغة من الـ id
            const isPython = code.includes('def ') || code.includes('print(');
            const isJavaScript = code.includes('console.log') || code.includes('function');
            
            if (isJavaScript || codeId === 'greetingCode') {
                const originalLog = console.log;
                console.log = (...args) => {
                    logs.push(args.map(arg => 
                        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                    ).join(' '));
                };
                
                try {
                    new Function(code)();
                    result = logs.join('\n') || 'تم التنفيذ بنجاح (لا يوجد مخرجات)';
                } catch (e) {
                    result = `خطأ: ${e.message}`;
                } finally {
                    console.log = originalLog;
                }
            } else {
                // محاكاة تنفيذ Python
                if (code.includes('is_prime')) {
                    const isPrime = (n) => {
                        if (n < 2) return false;
                        for (let i = 2; i <= Math.sqrt(n); i++) {
                            if (n % i === 0) return false;
                        }
                        return true;
                    };
                    
                    if (code.includes('is_prime(17)')) {
                        result = `True\nFalse`;
                    } else {
                        result = `True\nFalse`;
                    }
                } else if (code.includes('calculate_sum')) {
                    result = `مجموع الأعداد [10, 20, 30, 40, 50] = 150`;
                } else {
                    result = `⚠️ عرض توضيحي\n\n${code.substring(0, 300)}${code.length > 300 ? '...' : ''}`;
                }
            }
            
            outputElement.innerHTML = `<div class="output-content ${result.includes('خطأ') ? 'error' : ''}"><i class="fas fa-terminal"></i> ${escapeHtml(result)}</div>`;
        } catch (error) {
            outputElement.innerHTML = `<div class="output-content error"><i class="fas fa-exclamation-triangle"></i> خطأ: ${escapeHtml(error.message)}</div>`;
        }
    }, 100);
}

// مساعدة لتجنب XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

// نسخ الكود
function copyCode(codeId) {
    const codeElement = document.getElementById(codeId);
    if (!codeElement) return;
    
    const code = codeElement.innerText;
    navigator.clipboard.writeText(code).then(() => {
        showToast('تم نسخ الكود بنجاح!');
    }).catch(() => {
        showToast('فشل نسخ الكود', 'error');
    });
}

// ربط الأزرار
document.addEventListener('DOMContentLoaded', () => {
    // أزرار التشغيل
    document.querySelectorAll('.run-code-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const codeId = btn.getAttribute('data-code');
            const outputId = codeId === 'primeCode' ? 'primeOutput' :
                             codeId === 'greetingCode' ? 'greetingOutput' : 'sumOutput';
            runCode(codeId, outputId);
        });
    });
    
    // أزرار النسخ
    document.querySelectorAll('.copy-code-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const codeId = btn.getAttribute('data-code');
            copyCode(codeId);
        });
    });
    
    // تفعيل الرابط النشط عند التمرير
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});

// منع أخطاء اللمس الإضافية
document.addEventListener('touchstart', function(e) {
    // السماح بكل التفاعلات العادية
}, { passive: true });

document.addEventListener('touchmove', function(e) {
    // السماح بالتمرير الطبيعي
}, { passive: true });