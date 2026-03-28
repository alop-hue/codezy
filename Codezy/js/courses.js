// ========== البيانات ==========
const pathsData = [
    {
        id: 'web-dev',
        name: 'تطوير الويب',
        icon: 'fa-code',
        description: 'تعلم بناء مواقع وتطبيقات الويب من الصفر',
        color: '#00ff88',
        progress: 0,
        courses: [
            {
                id: 'html-css',
                name: 'HTML & CSS',
                icon: 'fa-html5',
                description: 'أساسيات بناء صفحات الويب',
                duration: '8 ساعات',
                lessons: [
                    { id: 'html-intro', type: 'lesson', title: 'مقدمة في HTML', content: '# مقدمة في HTML\n\nHTML هي لغة **ترميز النصوص** (HyperText Markup Language) وتستخدم لبناء هيكل صفحات الويب.\n\n## مثال بسيط:\n```html\n<h1>مرحباً بالعالم</h1>\n<p>هذه أول صفحة لي</p>\n```', completed: false, locked: false },
                    { id: 'html-structure', type: 'lesson', title: 'هيكل صفحة HTML', content: '# هيكل صفحة HTML\n\nأي صفحة HTML تتكون من:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>عنوان الصفحة</title>\n</head>\n<body>\n    المحتوى هنا\n</body>\n</html>\n```', completed: false, locked: true },
                    { id: 'css-intro', type: 'lesson', title: 'مقدمة في CSS', content: '# مقدمة في CSS\n\nCSS تستخدم لتنسيق الصفحات وتلوينها.\n\n```css\nbody {\n    background-color: black;\n    color: white;\n}\n```', completed: false, locked: true },
                    { id: 'exercise-1', type: 'exercise', title: 'تمرين: إنشاء صفحة بسيطة', question: 'قم بإنشاء صفحة HTML تحتوي على عنوان `<h1>` فيه كلمة "مرحباً" وفقرة `<p>` فيها كلمة "Codezy"', solution: '<h1>مرحباً</h1><p>Codezy</p>', completed: false, locked: true },
                    { id: 'project-1', type: 'project', title: 'مشروع: صفحة شخصية', description: 'قم بإنشاء صفحة تعريفية عن نفسك تحتوي على:\n- اسمك\n- مجال اهتمامك\n- صورة (يمكنك استخدام رابط صورة وهمية)\n- رابط لحسابك على GitHub', completed: false, locked: true }
                ]
            },
            {
                id: 'javascript',
                name: 'JavaScript',
                icon: 'fa-js',
                description: 'لغة البرمجة للويب',
                duration: '12 ساعة',
                lessons: [
                    { id: 'js-vars', type: 'lesson', title: 'المتغيرات في JavaScript', content: '# المتغيرات في JavaScript\n\nالمتغيرات تستخدم لتخزين البيانات:\n\n```javascript\nlet name = "أحمد";\nconst age = 25;\nvar city = "عمان";\n```', completed: false, locked: true },
                    { id: 'js-functions', type: 'lesson', title: 'الدوال', content: '# الدوال في JavaScript\n\nالدوال هي كتل قابلة لإعادة الاستخدام:\n\n```javascript\nfunction greet(name) {\n    return "مرحباً " + name;\n}\n\nconsole.log(greet("أحمد"));\n```', completed: false, locked: true },
                    { id: 'exercise-js1', type: 'exercise', title: 'تمرين: دوال', question: 'قم بكتابة دالة اسمها `sum` تقوم بجمع رقمين وإرجاع الناتج', solution: 'function sum(a,b){ return a+b; }', completed: false, locked: true },
                    { id: 'project-todo', type: 'project', title: 'مشروع: تطبيق مهام', description: 'قم ببناء تطبيق مهام بسيط يحتوي على:\n- إضافة مهمة جديدة\n- عرض قائمة المهام\n- حذف مهمة', completed: false, locked: true }
                ]
            }
        ]
    },
    {
        id: 'java-backend',
        name: 'جافا (Java)',
        icon: 'fa-java',
        description: 'تعلم البرمجة بلغة Java من الصفر',
        color: '#ffaa44',
        progress: 0,
        courses: [
            {
                id: 'java-basics',
                name: 'أساسيات Java',
                icon: 'fa-coffee',
                description: 'المفاهيم الأساسية في Java',
                duration: '10 ساعات',
                lessons: [
                    { id: 'java-hello', type: 'lesson', title: 'أول برنامج Java', content: '# أول برنامج Java\n\n```java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("مرحباً بالعالم");\n    }\n}\n```', completed: false, locked: false },
                    { id: 'java-vars', type: 'lesson', title: 'المتغيرات والأنواع', content: '# المتغيرات في Java\n\nJava هي لغة قوية الأنواع:\n\n```java\nint age = 25;\nString name = "أحمد";\nboolean isStudent = true;\ndouble salary = 5000.50;\n```', completed: false, locked: true },
                    { id: 'exercise-java1', type: 'exercise', title: 'تمرين: المتغيرات', question: 'قم بتعريف متغير من نوع `int` باسم `x` وقيمته 10، ومتغير من نوع `String` باسم `message` وقيمته "Hello"', solution: 'int x = 10;\nString message = "Hello";', completed: false, locked: true }
                ]
            }
        ]
    },
    {
        id: 'python-data',
        name: 'بايثون وعلوم البيانات',
        icon: 'fa-python',
        description: 'تعلم Python وتحليل البيانات',
        color: '#ff5555',
        progress: 0,
        courses: [
            {
                id: 'python-basics',
                name: 'أساسيات Python',
                icon: 'fa-python',
                description: 'تعلم أساسيات لغة Python',
                duration: '8 ساعات',
                lessons: [
                    { id: 'python-hello', type: 'lesson', title: 'أول برنامج Python', content: '# أول برنامج Python\n\n```python\nprint("مرحباً بالعالم")\n```', completed: false, locked: false },
                    { id: 'python-vars', type: 'lesson', title: 'المتغيرات', content: '# المتغيرات في Python\n\nPython هي لغة ديناميكية:\n\n```python\nname = "أحمد"\nage = 25\nis_student = True\n```', completed: false, locked: true }
                ]
            }
        ]
    }
];

let currentPath = null;
let currentCourse = null;
let completedLessonsCount = 0;
let totalLessonsCount = 0;

// ========== دالة آمنة لـ marked ==========
function safeMarkdown(content) {
    if (!content || typeof content !== 'string') {
        return '<p>محتوى غير متوفر</p>';
    }
    try {
        return marked.parse(content);
    } catch (e) {
        console.error('Markdown error:', e);
        return `<p>${content}</p>`;
    }
}

// ========== دالة التحقق من التمرين (مرنة) ==========
function checkExerciseSolution(userCode, solution) {
    const normalize = (str) => {
        return str
            .replace(/\s+/g, ' ')
            .replace(/;/g, '')
            .replace(/[{}]/g, '')
            .replace(/\(/g, ' ( ')
            .replace(/\)/g, ' ) ')
            .replace(/=/g, ' = ')
            .replace(/\+/g, ' + ')
            .replace(/-/g, ' - ')
            .replace(/\*/g, ' * ')
            .replace(/\//g, ' / ')
            .trim()
            .toLowerCase();
    };
    
    const normalizedUser = normalize(userCode);
    const normalizedSolution = normalize(solution);
    
    if (normalizedUser === normalizedSolution) return true;
    if (normalizedSolution.length > 5 && normalizedUser.includes(normalizedSolution)) return true;
    
    if (solution.includes('function sum') && (userCode.includes('function sum') || userCode.includes('const sum'))) {
        if (userCode.includes('return a+b') || userCode.includes('return a + b')) return true;
    }
    
    if (solution.includes('int x = 10') && userCode.includes('int x = 10') && userCode.includes('String message')) return true;
    
    if (solution.includes('<h1>') && userCode.includes('<h1>') && userCode.includes('</h1>')) {
        if (userCode.includes('مرحباً') || userCode.includes('مرحبا')) return true;
    }
    
    return false;
}

// ========== حفظ التقدم ==========
function saveProgress() {
    const progressData = {
        paths: pathsData.map(path => ({
            id: path.id,
            progress: path.progress,
            courses: path.courses.map(course => ({
                id: course.id,
                lessons: course.lessons.map(lesson => ({
                    id: lesson.id,
                    completed: lesson.completed,
                    locked: lesson.locked
                }))
            }))
        }))
    };
    localStorage.setItem('codezy_progress', JSON.stringify(progressData));
}

function loadProgress() {
    const saved = localStorage.getItem('codezy_progress');
    if (saved) {
        const data = JSON.parse(saved);
        data.paths.forEach(savedPath => {
            const path = pathsData.find(p => p.id === savedPath.id);
            if (path) {
                path.progress = savedPath.progress;
                savedPath.courses.forEach(savedCourse => {
                    const course = path.courses.find(c => c.id === savedCourse.id);
                    if (course) {
                        savedCourse.lessons.forEach(savedLesson => {
                            const lesson = course.lessons.find(l => l.id === savedLesson.id);
                            if (lesson) {
                                lesson.completed = savedLesson.completed;
                                lesson.locked = savedLesson.locked;
                            }
                        });
                    }
                });
            }
        });
    }
    updateAllProgress();
}

function updateAllProgress() {
    pathsData.forEach(path => {
        let total = 0;
        let completed = 0;
        path.courses.forEach(course => {
            course.lessons.forEach(lesson => {
                total++;
                if (lesson.completed) completed++;
            });
        });
        path.progress = total > 0 ? Math.round((completed / total) * 100) : 0;
    });
    saveProgress();
}

function updateLessonLocks() {
    pathsData.forEach(path => {
        path.courses.forEach(course => {
            let foundIncomplete = false;
            course.lessons.forEach(lesson => {
                if (!foundIncomplete && !lesson.completed && !lesson.locked) {
                    foundIncomplete = true;
                } else if (!foundIncomplete && !lesson.completed && lesson.locked) {
                    lesson.locked = false;
                    foundIncomplete = true;
                } else if (lesson.locked && !foundIncomplete) {
                    lesson.locked = false;
                }
            });
        });
    });
    saveProgress();
}

function completeLesson(pathId, courseId, lessonId) {
    const path = pathsData.find(p => p.id === pathId);
    if (path) {
        const course = path.courses.find(c => c.id === courseId);
        if (course) {
            const lesson = course.lessons.find(l => l.id === lessonId);
            if (lesson && !lesson.completed && !lesson.locked) {
                lesson.completed = true;
                updateAllProgress();
                updateLessonLocks();
                playSound('complete');
                showToast('🎉 أحسنت! أكملت الدرس بنجاح!');
                return true;
            }
        }
    }
    return false;
}

// ========== المؤثرات الصوتية ==========
function playSound(type) {
    const soundMap = {
        complete: 'completeSound',
        achievement: 'achievementSound',
        click: 'clickSound'
    };
    const soundId = soundMap[type];
    if (soundId) {
        const audio = document.getElementById(soundId);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio play failed:', e));
        }
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #00ff88;
        color: #0a0a0a;
        padding: 12px 24px;
        border-radius: 30px;
        z-index: 2000;
        animation: slideUp 0.3s ease;
        font-weight: 500;
    `;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ========== عرض المسارات ==========
function renderPaths() {
    const grid = document.getElementById('pathsGrid');
    if (!grid) return;
    
    grid.innerHTML = pathsData.map(path => `
        <div class="path-card" data-path-id="${path.id}">
            <div class="path-icon">
                <i class="fab ${path.icon}"></i>
            </div>
            <h3>${path.name}</h3>
            <p>${path.description}</p>
            <div class="path-stats">
                <span><i class="fas fa-book"></i> ${path.courses.length} كورسات</span>
                <span><i class="fas fa-check-circle"></i> ${path.progress}%</span>
            </div>
            <div class="path-progress">
                <div class="path-progress-bar" style="width: ${path.progress}%;"></div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.path-card').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click');
            const pathId = card.dataset.pathId;
            currentPath = pathsData.find(p => p.id === pathId);
            if (currentPath) {
                renderCourses();
            }
        });
    });
}

function renderCourses() {
    if (!currentPath) return;
    
    document.getElementById('pathsGrid').parentElement.parentElement.style.display = 'none';
    const coursesSection = document.getElementById('coursesSection');
    coursesSection.style.display = 'block';
    document.getElementById('lessonsSection').style.display = 'none';
    
    document.getElementById('selectedPathTitle').textContent = currentPath.name;
    document.getElementById('selectedPathDesc').textContent = currentPath.description;
    
    const grid = document.getElementById('coursesGrid');
    grid.innerHTML = currentPath.courses.map(course => `
        <div class="course-card" data-course-id="${course.id}">
            <div class="course-icon">
                <i class="fab ${course.icon}"></i>
            </div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>
            <div class="course-meta">
                <span><i class="fas fa-clock"></i> ${course.duration}</span>
                <span><i class="fas fa-list"></i> ${course.lessons.length} دروس</span>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            playSound('click');
            const courseId = card.dataset.courseId;
            currentCourse = currentPath.courses.find(c => c.id === courseId);
            if (currentCourse) {
                renderLessons();
            }
        });
    });
}

function renderLessons() {
    if (!currentCourse) return;
    
    document.getElementById('coursesSection').style.display = 'none';
    const lessonsSection = document.getElementById('lessonsSection');
    lessonsSection.style.display = 'block';
    
    document.getElementById('selectedCourseTitle').textContent = currentCourse.name;
    document.getElementById('selectedCourseDesc').textContent = currentCourse.description;
    
    totalLessonsCount = currentCourse.lessons.length;
    completedLessonsCount = currentCourse.lessons.filter(l => l.completed).length;
    const progressPercent = totalLessonsCount > 0 ? (completedLessonsCount / totalLessonsCount) * 100 : 0;
    document.getElementById('lessonsProgressBar').style.width = `${progressPercent}%`;
    document.getElementById('progressText').textContent = `${Math.round(progressPercent)}% مكتمل`;
    
    const grid = document.getElementById('lessonsGrid');
    grid.innerHTML = currentCourse.lessons.map(lesson => {
        const typeIcon = {
            lesson: 'fa-book',
            exercise: 'fa-puzzle-piece',
            project: 'fa-code-branch'
        };
        const typeClass = {
            lesson: 'lesson',
            exercise: 'exercise',
            project: 'project'
        };
        return `
            <div class="lesson-item" data-lesson-id="${lesson.id}" data-lesson-type="${lesson.type}">
                <div class="lesson-icon ${lesson.completed ? 'completed' : ''} ${lesson.locked ? 'locked' : ''}">
                    <i class="fas ${typeIcon[lesson.type]}"></i>
                </div>
                <div class="lesson-info">
                    <h4>${lesson.title}</h4>
                    <p>${lesson.type === 'lesson' ? 'درس تعليمي' : lesson.type === 'exercise' ? 'تمرين تفاعلي' : 'مشروع عملي'}</p>
                </div>
                <div class="lesson-type ${typeClass[lesson.type]}">
                    ${lesson.type === 'lesson' ? 'درس' : lesson.type === 'exercise' ? 'تمرين' : 'مشروع'}
                </div>
                <div class="lesson-status ${lesson.completed ? 'completed' : ''} ${lesson.locked ? 'locked' : ''}">
                    ${lesson.completed ? '<i class="fas fa-check-circle"></i>' : lesson.locked ? '<i class="fas fa-lock"></i>' : '<i class="far fa-circle"></i>'}
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', () => {
            const lessonId = item.dataset.lessonId;
            const lesson = currentCourse.lessons.find(l => l.id === lessonId);
            if (lesson && !lesson.locked) {
                playSound('click');
                openLesson(lesson);
            } else if (lesson && lesson.locked) {
                showToast('🔒 أكمل الدروس السابقة أولاً');
            }
        });
    });
}

function openLesson(lesson) {
    if (lesson.type === 'lesson') {
        showLessonContent(lesson);
    } else if (lesson.type === 'exercise') {
        openExerciseModal(lesson);
    } else if (lesson.type === 'project') {
        openProjectModal(lesson);
    }
}

function showLessonContent(lesson) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>${lesson.title}</h3>
                <button class="close-modal" onclick="this.closest('.modal-overlay').remove()">&times;</button>
            </div>
            <div class="modal-body">
                <div class="markdown-body">${safeMarkdown(lesson.content)}</div>
                <div class="modal-actions" style="margin-top: 20px;">
                    <button class="btn-check" id="markLessonComplete">أكملت الدرس ✓</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    document.getElementById('markLessonComplete')?.addEventListener('click', () => {
        if (completeLesson(currentPath.id, currentCourse.id, lesson.id)) {
            modal.remove();
            renderLessons();
        }
    });
}

function openExerciseModal(lesson) {
    const modal = document.getElementById('exerciseModal');
    document.getElementById('exerciseTitle').textContent = lesson.title;
    document.getElementById('exerciseQuestion').innerHTML = safeMarkdown(lesson.question);
    document.getElementById('exerciseCodeInput').value = '';
    document.getElementById('exerciseFeedback').style.display = 'none';
    modal.style.display = 'block';
    
    const checkBtn = document.getElementById('checkExerciseBtn');
    const hintBtn = document.getElementById('getHintBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    
    const newCheckBtn = checkBtn.cloneNode(true);
    const newHintBtn = hintBtn.cloneNode(true);
    checkBtn.parentNode.replaceChild(newCheckBtn, checkBtn);
    hintBtn.parentNode.replaceChild(newHintBtn, hintBtn);
    
    newCheckBtn.addEventListener('click', () => {
        const userCode = document.getElementById('exerciseCodeInput').value;
        const feedback = document.getElementById('exerciseFeedback');
        
        if (checkExerciseSolution(userCode, lesson.solution)) {
            feedback.className = 'exercise-feedback success';
            feedback.innerHTML = '<i class="fas fa-check-circle"></i> ✅ ممتاز! إجابتك صحيحة!';
            feedback.style.display = 'block';
            playSound('complete');
            if (completeLesson(currentPath.id, currentCourse.id, lesson.id)) {
                setTimeout(() => {
                    modal.style.display = 'none';
                    renderLessons();
                }, 1500);
            }
        } else {
            feedback.className = 'exercise-feedback error';
            feedback.innerHTML = `<i class="fas fa-times-circle"></i> ❌ الإجابة غير صحيحة.<br><br>
            <strong>الحل المتوقع:</strong><br>
            <pre style="background:#1a1a1a;padding:10px;border-radius:8px;margin-top:10px;">${lesson.solution}</pre>
            حاول مرة أخرى!`;
            feedback.style.display = 'block';
            playSound('click');
        }
    });
    
    newHintBtn.addEventListener('click', () => {
        const feedback = document.getElementById('exerciseFeedback');
        feedback.className = 'exercise-feedback success';
        feedback.innerHTML = `<i class="fas fa-lightbulb"></i> 💡 تلميحة: ${lesson.solution.substring(0, 150)}...`;
        feedback.style.display = 'block';
        playSound('click');
    });
    
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.querySelector('.modal-overlay')?.addEventListener('click', () => { modal.style.display = 'none'; });
}

function openProjectModal(lesson) {
    const modal = document.getElementById('projectModal');
    document.getElementById('projectTitle').textContent = lesson.title;
    document.getElementById('projectDescription').innerHTML = safeMarkdown(lesson.description);
    document.getElementById('projectCodeInput').value = '';
    document.getElementById('projectFeedback').style.display = 'none';
    modal.style.display = 'block';
    
    const submitBtn = document.getElementById('submitProjectBtn');
    const closeBtn = document.getElementById('closeProjectModalBtn');
    
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);
    
    newSubmitBtn.addEventListener('click', () => {
        const userCode = document.getElementById('projectCodeInput').value;
        const feedback = document.getElementById('projectFeedback');
        
        if (userCode.length > 20) {
            feedback.className = 'project-feedback success';
            feedback.innerHTML = '<i class="fas fa-check-circle"></i> 🎉 تم تسليم المشروع بنجاح! سيتم مراجعته قريباً.';
            feedback.style.display = 'block';
            playSound('achievement');
            if (completeLesson(currentPath.id, currentCourse.id, lesson.id)) {
                setTimeout(() => {
                    modal.style.display = 'none';
                    renderLessons();
                }, 2000);
            }
        } else {
            feedback.className = 'project-feedback error';
            feedback.innerHTML = '<i class="fas fa-times-circle"></i> ❌ يرجى كتابة الكود الخاص بمشروعك قبل التسليم.';
            feedback.style.display = 'block';
            playSound('click');
        }
    });
    
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.querySelector('.modal-overlay')?.addEventListener('click', () => { modal.style.display = 'none'; });
}

// ========== المساعد البرمجي يونس ==========
const OPENROUTER_API_KEY = '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';

const ASSISTANT_SYSTEM_PROMPT = `أنت يونس، مساعد برمجي متخصص في تعليم البرمجة. أنت ودود ومفيد ومتحمس لمساعدة المتعلمين. تتحدث العربية بطلاقة وتساعد في حل المشكلات البرمجية. تقدم شرحاً واضحاً وأمثلة عملية. تشجع المتعلمين وتحفزهم. أنت خبير في Java, JavaScript, Python, HTML/CSS. ترد بطريقة محفزة وإيجابية.`;

async function sendToAssistant(message) {
    try {
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'HTTP-Referer': window.location.origin,
                'X-Title': 'Codezy Assistant'
            },
            body: JSON.stringify({
                model: 'openrouter/free',
                messages: [
                    { role: 'system', content: ASSISTANT_SYSTEM_PROMPT },
                    { role: 'user', content: message }
                ],
                max_tokens: 500,
                temperature: 0.7
            })
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            console.error('API Error:', errorData);
            return 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى لاحقاً.';
        }
        
        const data = await response.json();
        if (data.choices && data.choices[0] && data.choices[0].message) {
            return data.choices[0].message.content;
        }
        return 'عذراً، لم أستطع فهم ذلك. هل يمكنك إعادة صياغة سؤالك؟';
    } catch (error) {
        console.error('Assistant error:', error);
        return 'عذراً، حدث خطأ في الاتصال. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.';
    }
}

let currentAssistantMessages = [];

function addAssistantMessage(content, isUser = false) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    messageDiv.innerHTML = `<div class="message-content">${safeMarkdown(content)}</div>`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
    
    if (!isUser) {
        currentAssistantMessages.push({ role: 'assistant', content: content });
    } else {
        currentAssistantMessages.push({ role: 'user', content: content });
    }
}

// ========== إضافة أنيميشن التوست ==========
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideUp {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
    @keyframes slideDown {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(20px); }
    }
`;
document.head.appendChild(toastStyle);

// ========== تهيئة الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    renderPaths();
    
    // Back buttons
    document.getElementById('backToPathsBtn')?.addEventListener('click', () => {
        playSound('click');
        document.getElementById('coursesSection').style.display = 'none';
        document.getElementById('pathsGrid').parentElement.parentElement.style.display = 'block';
        currentPath = null;
        renderPaths();
    });
    
    document.getElementById('backToCoursesBtn')?.addEventListener('click', () => {
        playSound('click');
        document.getElementById('lessonsSection').style.display = 'none';
        document.getElementById('coursesSection').style.display = 'block';
        currentCourse = null;
        renderCourses();
    });
    
    // Assistant bubble
    const bubble = document.getElementById('assistantBubble');
    const chat = document.getElementById('assistantChat');
    const closeChat = document.getElementById('closeChatBtn');
    const sendBtn = document.getElementById('sendChatBtn');
    const chatInput = document.getElementById('chatInput');
    
    if (bubble && chat) {
        bubble.addEventListener('click', () => {
            playSound('click');
            chat.style.display = 'flex';
            document.getElementById('assistantNotification').style.display = 'none';
        });
        
        if (closeChat) {
            closeChat.addEventListener('click', () => {
                chat.style.display = 'none';
            });
        }
        
        async function sendMessage() {
            const message = chatInput.value.trim();
            if (!message) return;
            
            addAssistantMessage(message, true);
            chatInput.value = '';
            
            const loadingMsg = document.createElement('div');
            loadingMsg.className = 'message assistant';
            loadingMsg.innerHTML = '<div class="message-content"><i class="fas fa-spinner fa-spin"></i> يكتب...</div>';
            document.getElementById('chatMessages').appendChild(loadingMsg);
            
            const response = await sendToAssistant(message);
            loadingMsg.remove();
            addAssistantMessage(response, false);
        }
        
        if (sendBtn) sendBtn.addEventListener('click', sendMessage);
        if (chatInput) {
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }
    }
    
    // Dark/Light mode
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
    } else {
        body.classList.add('dark-mode');
    }
    
    function updateThemeIcon() {
        if (!themeToggle) return;
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
    
    if (themeToggle) {
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
    }
    
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