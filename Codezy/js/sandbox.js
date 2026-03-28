let editors = [];
let currentFileIndex = 0;
let files = [];

require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

// الانتظار حتى يتم تحميل DOM بالكامل
document.addEventListener('DOMContentLoaded', function() {
    require(['vs/editor/editor.main'], function() {
        // إضافة ملف افتراضي
        files.push({ name: 'index.html', content: `<!DOCTYPE html>
<html>
<head>
    <title>Codezy</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 50px; background: #f0f0f0; }
        h1 { color: #00ff88; }
    </style>
</head>
<body>
    <h1>✨ مرحباً بك في محرر Codezy!</h1>
    <p>يمكنك تعديل هذا الكود أو إضافة ملفات جديدة.</p>
</body>
</html>` });
        updateFileTabs();
        addNewEditor('index.html');
        switchFile(0);
        
        // ربط الأحداث بعد تحميل المحرر
        bindEvents();
    });
});

function addNewEditor(filename) {
    const container = document.getElementById('container');
    if (!container) return;
    
    const editorContainer = document.createElement('div');
    editorContainer.className = 'editor';
    container.appendChild(editorContainer);
    
    const editor = monaco.editor.create(editorContainer, {
        language: getLanguageFromFilename(filename),
        theme: document.getElementById('themeSelector')?.value || 'vs-dark',
        automaticLayout: true,
        fontSize: 14,
        fontFamily: 'Consolas, monospace',
        minimap: { enabled: false }
    });
    editors.push(editor);
}

function getLanguageFromFilename(filename) {
    const ext = filename.split('.').pop();
    const map = {
        html: 'html',
        js: 'javascript',
        css: 'css',
        py: 'python',
        java: 'java',
        cpp: 'cpp',
        c: 'cpp',
        txt: 'plaintext'
    };
    return map[ext] || 'html';
}

function switchFile(index) {
    if (currentFileIndex < files.length && editors[currentFileIndex]) {
        files[currentFileIndex].content = editors[currentFileIndex].getValue();
    }
    currentFileIndex = index;
    if (editors[currentFileIndex]) {
        editors[currentFileIndex].setValue(files[index].content);
        const lang = getLanguageFromFilename(files[index].name);
        const langSelect = document.getElementById('languageSelector');
        if (langSelect) langSelect.value = lang;
        monaco.editor.setModelLanguage(editors[currentFileIndex].getModel(), lang);
    }
    updateFileTabs();
}

function updateFileTabs() {
    const fileTabs = document.getElementById('file-tabs');
    if (!fileTabs) return;
    
    let tabsHtml = '';
    files.forEach((file, i) => {
        const activeClass = i === currentFileIndex ? 'active' : '';
        tabsHtml += `<button class="tab-btn ${activeClass}" onclick="switchFile(${i})">${escapeHtml(file.name)}</button>`;
    });
    tabsHtml += '<button class="tab-btn" onclick="addNewFile()">+ ملف جديد</button>';
    fileTabs.innerHTML = tabsHtml;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function addNewFile() {
    const filename = prompt('أدخل اسم الملف مع الامتداد:', 'file' + (files.length + 1) + '.html');
    if (filename) {
        files.push({ name: filename, content: '' });
        addNewEditor(filename);
        updateFileTabs();
        switchFile(files.length - 1);
    }
}

// تشغيل الكود
function run() {
    if (!editors[currentFileIndex]) return;
    const code = editors[currentFileIndex].getValue();
    const previewFrame = document.getElementById('previewFrame');
    if (previewFrame) {
        previewFrame.srcdoc = code;
    }
    const lang = getLanguageFromFilename(files[currentFileIndex]?.name || 'index.html');
    if (lang !== 'html') {
        console.log(`لغة ${lang} لا تدعم المعاينة المباشرة. استخدم المحرر لتجربة الكود.`);
    }
}

// حفظ الملف الحالي
function saveCurrentFile() {
    if (!editors[currentFileIndex]) return;
    files[currentFileIndex].content = editors[currentFileIndex].getValue();
    const code = files[currentFileIndex].content;
    const filename = files[currentFileIndex].name;
    const blob = new Blob([code], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
}

// تحميل ملف وفتحه في علامة تبويب جديدة
function loadFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.html,.js,.css,.py,.java,.cpp,.c,.txt';
    input.onchange = function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            const content = event.target.result;
            const name = file.name;
            files.push({ name: name, content: content });
            addNewEditor(name);
            updateFileTabs();
            switchFile(files.length - 1);
        };
        reader.readAsText(file);
    };
    input.click();
}

function bindEvents() {
    // تغيير لغة الملف الحالي
    const langSelect = document.getElementById('languageSelector');
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            if (editors[currentFileIndex]) {
                monaco.editor.setModelLanguage(editors[currentFileIndex].getModel(), this.value);
                const newExt = this.value === 'javascript' ? '.js' : (this.value === 'plaintext' ? '.txt' : '.' + this.value);
                if (files[currentFileIndex] && !files[currentFileIndex].name.endsWith(newExt)) {
                    files[currentFileIndex].name = files[currentFileIndex].name.split('.')[0] + newExt;
                    updateFileTabs();
                }
            }
        });
    }
    
    // تغيير الثيم
    const themeSelect = document.getElementById('themeSelector');
    if (themeSelect) {
        themeSelect.addEventListener('change', function() {
            monaco.editor.setTheme(this.value);
        });
    }
    
    // أزرار التحكم
    const runBtn = document.getElementById('runBtn');
    if (runBtn) runBtn.addEventListener('click', run);
    
    const saveBtn = document.getElementById('saveBtn');
    if (saveBtn) saveBtn.addEventListener('click', saveCurrentFile);
    
    const loadBtn = document.getElementById('loadBtn');
    if (loadBtn) loadBtn.addEventListener('click', loadFile);
    
    const clearOutputBtn = document.getElementById('clearOutputBtn');
    if (clearOutputBtn) {
        clearOutputBtn.addEventListener('click', () => {
            const previewFrame = document.getElementById('previewFrame');
            if (previewFrame) previewFrame.srcdoc = '';
        });
    }
}

// Dark/Light mode sync مع باقي الموقع
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        const themeSelect = document.getElementById('themeSelector');
        if (themeSelect) {
            themeSelect.value = 'vs-light';
            if (typeof monaco !== 'undefined') monaco.editor.setTheme('vs-light');
        }
    } else {
        body.classList.add('dark-mode');
        const themeSelect = document.getElementById('themeSelector');
        if (themeSelect) {
            themeSelect.value = 'vs-dark';
            if (typeof monaco !== 'undefined') monaco.editor.setTheme('vs-dark');
        }
    }
    
    function updateThemeIcon() {
        if (!themeToggle) return;
        const icon = themeToggle.querySelector('i');
        if (icon) {
            if (body.classList.contains('light-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
    updateThemeIcon();
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                const themeSelect = document.getElementById('themeSelector');
                if (themeSelect) {
                    themeSelect.value = 'vs-dark';
                    if (typeof monaco !== 'undefined') monaco.editor.setTheme('vs-dark');
                }
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                const themeSelect = document.getElementById('themeSelector');
                if (themeSelect) {
                    themeSelect.value = 'vs-light';
                    if (typeof monaco !== 'undefined') monaco.editor.setTheme('vs-light');
                }
            }
            updateThemeIcon();
        });
    }
    
    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
});

// جعل الدوال متاحة عالمياً للـ onclick في الأزرار
window.switchFile = switchFile;
window.addNewFile = addNewFile;