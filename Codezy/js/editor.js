   let editors = [];
        let currentFileIndex = 0;
        let files = [];

        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.34.0/min/vs' }});
        require(['vs/editor/editor.main'], function() {
            files.push({ name: 'index.html', content: '' });
            updateFileTabs();
            addNewEditor('index.html');
            switchFile(0);
        });

        document.getElementById('language-selector').addEventListener('change', function() {
            if (editors[currentFileIndex]) {
                monaco.editor.setModelLanguage(editors[currentFileIndex].getModel(), this.value);
            }
        });

        document.getElementById('theme-selector').addEventListener('change', function() {
            monaco.editor.setTheme(this.value);
        });

        function run() {
            try {
                const code = editors[currentFileIndex].getValue();
                const newWindow = window.open();
                if (newWindow) {
                    newWindow.document.write(code);
                    newWindow.document.close();
                } else {
                    console.error('Failed to open new window. Please check your browser settings.');
                }
            } catch (error) {
                console.error('Error running code:', error);
            }
        }

        function save() {
            if (editors[currentFileIndex]) {
                files[currentFileIndex].content = editors[currentFileIndex].getValue();
                const code = files[currentFileIndex].content;
                const filename = files[currentFileIndex].name;
                const element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
                element.setAttribute('download', filename);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }
        }

        function load() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.html,.js,.css,.txt';
            input.onchange = function(e) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    editors[currentFileIndex].setValue(event.target.result);
                    document.title = file.name;
                };
                reader.readAsText(file);
            };
            input.click();
        }

        function addNewFile() {
            const filename = prompt('Enter filename:', 'file' + (files.length + 1) + '.html');
            if (filename) {
                files.push({ name: filename, content: '' });
                addNewEditor(filename);
                updateFileTabs();
                switchFile(files.length - 1);
            }
        }

        function addNewEditor(filename) {
            const editorContainer = document.createElement('div');
            editorContainer.className = 'editor';
            document.getElementById('container').appendChild(editorContainer);
            const editor = monaco.editor.create(editorContainer, {
                language: document.getElementById('language-selector').value,
                theme: document.getElementById('theme-selector').value,
                automaticLayout: true
            });
            editors.push(editor);
        }

        function switchFile(index) {
            if (currentFileIndex < files.length && editors[currentFileIndex]) {
                files[currentFileIndex].content = editors[currentFileIndex].getValue();
            }
            currentFileIndex = index;
            if (editors[currentFileIndex]) {
                editors[currentFileIndex].setValue(files[index].content);
            }
            document.title = files[index].name;
            updateFileTabs();
        }

        function updateFileTabs() {
            let tabsHtml = '';
            files.forEach((file, i) => {
                const activeClass = i === currentFileIndex ? 'active' : '';
                tabsHtml += `<button class="tab-btn ${activeClass}" onclick="switchFile(${i})">${file.name}</button>`;
            });
            tabsHtml += '<button class="tab-btn" onclick="addNewFile()">+ New File</button>';
            document.getElementById('file-tabs').innerHTML = tabsHtml;
        }
