// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Select necessary DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    const addTask = () => {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new list item (li) for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add an event listener to remove the task when the button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the list item
        taskItem.appendChild(removeButton);

        // Add the new task to the task list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    };

    // Add event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to listen for "Enter" keypress
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
