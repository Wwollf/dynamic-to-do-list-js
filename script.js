document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Add a new task to the list and Local Storage
    function addTask(taskText, save = true) {
        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');
        removeBtn.onclick = () => {
            taskList.removeChild(listItem); // Remove task from UI
            removeTaskFromStorage(taskText); // Remove task from Local Storage
        };

        // Append the button to the list item and the list item to the task list
        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // If 'save' is true, store the task in Local Storage
        if (save) {
            saveTaskToStorage(taskText);
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // Add task via button click or pressing 'Enter' key
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
        } else {
            addTask(taskText);
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task.');
            } else {
                addTask(taskText);
            }
        }
    });

    // Load tasks on DOMContentLoaded
    loadTasks();
});



