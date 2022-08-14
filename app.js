// Define UI Vars
const form      = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn  = document.querySelector('.clear-tasks');
const filter    = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners - call : what are event listeners?
loadEventListeners();

//Load all event listeners - definition
function loadEventListeners(){
    // Add task event
    form.addEventListener('submit', addTask) // call to addTask function      
    // Remove task event
    taskList.addEventListener('click', removeTask);
}


// Add Task - definition
function addTask(e) {
    if (taskInput.value === '') {   // In case the field is empty, ask the user via alert to enter in a task (not an empty field)
        alert('Add a task!');
    } // Else, execute the following:
    
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item'; // In materialize, if you want your "li"-s to look good, your ul needs a class of collection (which it does), and each list item should have a class of collection-item
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create a new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add fontawesome X icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append the li to ul
    taskList.appendChild(li);
    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove Task - definition
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}
