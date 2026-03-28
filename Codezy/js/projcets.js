// بيانات المشاريع
const projectsData = [
    {
        id: 'calculator-js',
        title: 'آلة حاسبة تفاعلية',
        description: 'آلة حاسبة بسيطة باستخدام HTML, CSS, JavaScript مع عمليات أساسية',
        language: 'javascript',
        langLabel: 'JavaScript',
        icon: 'fa-calculator',
        code: `<!DOCTYPE html>
<html dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>آلة حاسبة</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #667eea, #764ba2);
            margin: 0;
        }
        .calculator {
            background: #fff;
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            width: 260px;
        }
        .display {
            background: #222;
            color: #fff;
            font-size: 2em;
            text-align: right;
            padding: 10px;
            border-radius: 10px;
            margin-bottom: 15px;
            min-height: 60px;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        button {
            padding: 15px;
            font-size: 1.2em;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            background: #f0f0f0;
            transition: 0.2s;
        }
        button:hover {
            background: #ddd;
        }
        .operator {
            background: #ff9500;
            color: white;
        }
        .equal {
            background: #34c759;
            color: white;
        }
        .clear {
            background: #ff3b30;
            color: white;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button class="operator" onclick="appendToDisplay('*')">*</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button class="equal" onclick="calculate()">=</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
        </div>
    </div>
    <script>
        let display = document.getElementById('display');
        function appendToDisplay(value) {
            if (display.innerText === '0' && value !== '.') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
        function clearDisplay() {
            display.innerText = '0';
        }
        function calculate() {
            try {
                display.innerText = eval(display.innerText);
            } catch(e) {
                display.innerText = 'خطأ';
            }
        }
    </script>
</body>
</html>`,
        previewType: 'html'
    },
    {
        id: 'todo-list',
        title: 'قائمة المهام (To-Do)',
        description: 'تطبيق لإدارة المهام مع إضافة وحذف وتخزين محلي',
        language: 'javascript',
        langLabel: 'JavaScript',
        icon: 'fa-list-check',
        code: `<!DOCTYPE html>
<html dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>قائمة المهام</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .todo-container {
            background: white;
            border-radius: 20px;
            padding: 20px;
            width: 350px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        #taskInput {
            flex: 1;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }
        #addBtn {
            background: #667eea;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 10px;
            cursor: pointer;
        }
        #addBtn:hover {
            background: #5a67d8;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f9f9f9;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 10px;
        }
        li span {
            cursor: pointer;
            flex: 1;
        }
        li.completed span {
            text-decoration: line-through;
            color: #888;
        }
        .delete-btn {
            background: #ff3b30;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="todo-container">
        <h1>✅ قائمة المهام</h1>
        <div class="input-group">
            <input type="text" id="taskInput" placeholder="أضف مهمة جديدة...">
            <button id="addBtn">إضافة</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    <script>
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const taskList = document.getElementById('taskList');
        const taskInput = document.getElementById('taskInput');
        const addBtn = document.getElementById('addBtn');

        function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.className = task.completed ? 'completed' : '';
                const span = document.createElement('span');
                span.textContent = task.text;
                span.onclick = () => toggleTask(index);
                const delBtn = document.createElement('button');
                delBtn.textContent = 'حذف';
                delBtn.className = 'delete-btn';
                delBtn.onclick = () => deleteTask(index);
                li.appendChild(span);
                li.appendChild(delBtn);
                taskList.appendChild(li);
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        function addTask() {
            const text = taskInput.value.trim();
            if (text) {
                tasks.push({ text, completed: false });
                taskInput.value = '';
                renderTasks();
            }
        }

        function toggleTask(index) {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        }

        function deleteTask(index) {
            tasks.splice(index, 1);
            renderTasks();
        }

        addBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTask();
        });
        renderTasks();
    </script>
</body>
</html>`,
        previewType: 'html'
    },
    {
        id: 'weather-app',
        title: 'تطبيق الطقس',
        description: 'عرض حالة الطقس باستخدام API مجاني (OpenWeatherMap)',
        language: 'javascript',
        langLabel: 'JavaScript',
        icon: 'fa-cloud-sun',
        code: `<!DOCTYPE html>
<html dir="ltr">
<head>
    <meta charset="UTF-8">
    <title>تطبيق الطقس</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #00c6fb, #005bea);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: white;
        }
        .weather-card {
            background: rgba(0,0,0,0.6);
            border-radius: 20px;
            padding: 30px;
            text-align: center;
            width: 300px;
        }
        input {
            padding: 10px;
            border-radius: 30px;
            border: none;
            width: 80%;
            margin-bottom: 15px;
        }
        button {
            padding: 10px 20px;
            border-radius: 30px;
            border: none;
            background: #ff9500;
            color: white;
            cursor: pointer;
        }
        .weather-info {
            margin-top: 20px;
        }
        .temp {
            font-size: 48px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="weather-card">
        <h2>🌤️ تطبيق الطقس</h2>
        <input type="text" id="cityInput" placeholder="اسم المدينة" value="Cairo">
        <button onclick="getWeather()">بحث</button>
        <div class="weather-info" id="weatherInfo">
            <p>أدخل اسم مدينة لعرض الطقس</p>
        </div>
    </div>
    <script>
        async function getWeather() {
            const city = document.getElementById('cityInput').value;
            const apiKey = 'dummy_api_key'; // استبدل بمفتاح حقيقي
            const url = \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric&lang=ar\`;
            try {
                // هذا مثال توضيحي - سيتم استخدام بيانات وهمية لأن المفتاح غير صالح
                const mockData = {
                    name: city,
                    main: { temp: 25, humidity: 60 },
                    weather: [{ description: 'صافي', icon: '01d' }]
                };
                // في الواقع نستخدم fetch(url) لكن لعدم وجود مفتاح حقيقي نعرض بيانات تجريبية
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = \`
                    <div class="temp">\${mockData.main.temp}°C</div>
                    <div>\${mockData.weather[0].description}</div>
                    <div>الرطوبة: \${mockData.main.humidity}%</div>
                    <div>المدينة: \${mockData.name}</div>
                \`;
            } catch (error) {
                document.getElementById('weatherInfo').innerHTML = '<p>حدث خطأ، حاول مرة أخرى</p>';
            }
        }
        getWeather();
    </script>
</body>
</html>`,
        previewType: 'html'
    },
    {
        id: 'python-calculator',
        title: 'آلة حاسبة (Python)',
        description: 'برنامج Python بسيط لحساب العمليات الأساسية. (عرض الكود فقط)',
        language: 'python',
        langLabel: 'Python',
        icon: 'fa-calculator',
        code: `# آلة حاسبة بسيطة بلغة Python
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "لا يمكن القسمة على صفر"
    return x / y

print("اختر العملية:")
print("1. جمع")
print("2. طرح")
print("3. ضرب")
print("4. قسمة")

choice = input("أدخل رقم العملية (1/2/3/4): ")
num1 = float(input("أدخل الرقم الأول: "))
num2 = float(input("أدخل الرقم الثاني: "))

if choice == '1':
    print(f"{num1} + {num2} = {add(num1, num2)}")
elif choice == '2':
    print(f"{num1} - {num2} = {subtract(num1, num2)}")
elif choice == '3':
    print(f"{num1} * {num2} = {multiply(num1, num2)}")
elif choice == '4':
    print(f"{num1} / {num2} = {divide(num1, num2)}")
else:
    print("اختيار غير صحيح")`,
        previewType: 'code-only'
    },
    {
        id: 'java-hello',
        title: 'برنامج Hello World (Java)',
        description: 'أول برنامج في Java، يعرض رسالة ترحيب.',
        language: 'java',
        langLabel: 'Java',
        icon: 'fa-coffee',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("مرحباً بك في عالم Java!");
        System.out.println("هذا مثال بسيط لبرنامج Java.");
    }
}`,
        previewType: 'code-only'
    }
];

// عرض المشاريع
function renderProjects(filter = 'all') {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    const filtered = filter === 'all' ? projectsData : projectsData.filter(p => p.language === filter);
    grid.innerHTML = filtered.map(project => `
        <div class="project-card" data-id="${project.id}">
            <div class="project-img">
                <i class="fas ${project.icon}"></i>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-meta">
                    <span class="project-lang-badge ${project.language}">${project.langLabel}</span>
                    <span class="project-views"><i class="fas fa-eye"></i> معاينة</span>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.id;
            const project = projectsData.find(p => p.id === id);
            if (project) openProjectModal(project);
        });
    });
}

function openProjectModal(project) {
    const modal = document.getElementById('projectModal');
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalDesc').innerHTML = project.description;
    document.getElementById('modalLang').innerHTML = `<i class="fas fa-code"></i> اللغة: ${project.langLabel}`;
    document.getElementById('codeLanguage').innerText = project.langLabel;
    const codeElement = document.getElementById('projectCode');
    codeElement.textContent = project.code;
    if (window.hljs) hljs.highlightElement(codeElement);
    else if (typeof marked !== 'undefined') {
        // إذا كان marked موجودًا يمكننا تلوينه ببساطة
        codeElement.innerHTML = project.code;
    }

    const previewFrame = document.getElementById('previewFrame');
    if (project.previewType === 'html') {
        previewFrame.srcdoc = project.code;
    } else {
        previewFrame.srcdoc = `<html><body style="padding:20px;font-family:Arial;"><pre>${project.code}</pre><p>هذا المشروع من نوع ${project.langLabel}، لا يمكن عرض معاينة مباشرة. لكن يمكنك نسخ الكود وتجربته في بيئتك.</p></body></html>`;
    }

    // إعداد الأزرار
    const copyBtn = document.getElementById('copyCodeBtn');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(project.code);
        showToast('تم نسخ الكود بنجاح!');
    };

    // تبديل التبويبات
    const codeTab = document.querySelector('[data-tab="code"]');
    const previewTab = document.querySelector('[data-tab="preview"]');
    const codePanel = document.getElementById('codePanel');
    const previewPanel = document.getElementById('previewPanel');

    function setActiveTab(tab) {
        codeTab.classList.remove('active');
        previewTab.classList.remove('active');
        if (tab === 'code') {
            codeTab.classList.add('active');
            codePanel.style.display = 'block';
            previewPanel.style.display = 'none';
        } else {
            previewTab.classList.add('active');
            codePanel.style.display = 'none';
            previewPanel.style.display = 'block';
        }
    }

    codeTab.onclick = () => setActiveTab('code');
    previewTab.onclick = () => setActiveTab('preview');
    setActiveTab('code');

    modal.style.display = 'block';
    const closeBtn = document.getElementById('closeModalBtn');
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.querySelector('.modal-overlay').onclick = () => { modal.style.display = 'none'; };
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = msg;
    toast.style.cssText = `position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:#00ff88; color:#0a0a0a; padding:10px 20px; border-radius:30px; z-index:3000;`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// التصفية
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    // Dark/Light mode
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') body.classList.add('light-mode');
    else body.classList.add('dark-mode');

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    updateThemeIcon();

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
        updateThemeIcon();
    });

    // Mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
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