// Firebase Configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js';
import { getFirestore, doc, setDoc, getDoc, collection, query, where, getDocs, updateDoc } from 'https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js';

// استبدل هذه البيانات من Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyDEFAULT_USE_YOUR_OWN", // استبدل بمفتاحك
    authDomain: "codezy-app.firebaseapp.com",
    projectId: "codezy-app",
    storageBucket: "codezy-app.firebasestorage.app",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// تصدير الدوال
export { 
    auth, 
    db, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    doc, 
    setDoc, 
    getDoc,
    updateDoc,
    collection, 
    query, 
    where, 
    getDocs
};