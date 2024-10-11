// Step 1: Listen for 'DOMContentLoaded' to ensure the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 3: Create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Step 4: Validate the input (taskText should not be empty)
        if (taskText === "") {
            alert('Please enter a task.');
            return;
        }

        // Step 5: Create the task and its remove button
        const li = document.createElement('li'); // Create new <li>
        li.textContent = taskText; // Set the text of the <li> to the taskText
        li.classList.add('task-item'); // Add a class for styling the task item
        
        const removeBtn = document.createElement('button'); // Create the remove button
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // Use classList.add for styling the remove button

        // Step 6: Add click event to remove the task when the remove button is clicked
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove the <li> from the taskList
        };

        // Step 7: Append the remove button to the <li>, and the <li> to the task list
        li.appendChild(removeBtn); 
        taskList.appendChild(li);

        // Step 8: Clear the input field after adding the task
        taskInput.value = '';
    }

    // Step 9: Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Step 10: Add event listener for 'Enter' key to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
