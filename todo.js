// Define a function called addTask() to add the text 
// entered in the taskInput element to the todo list
// when you click the Add Task button
function addTask() {
    // Define a constant value that does not change. 
    // const values CANNOT be reassigned.
    // const values must be assigned a value when declared.
    // Here we are declaring a getElementById method that
    // retreives the element assigned the taskInput id in todo.js
    const input = document.getElementById("taskInput");
    // Declare the text entered for each task as another 
    // unchangeable const. This just takes the input value 
    // and removes (trims) extra spaces from around text entered.
    const taskText = input.value.trim();

    // If the trimmed text is not nothing, we will add it to the
    // task list. This ensures nothing will happen if no input
    if (taskText !== "") {
        // This creates a list item (li) element
        const li = document.createElement("li");
        // This sets the li element to be the post-trim
        // taskText value.
        li.textContent = taskText;
        // The getElementById method searches index.html for
        // the contents of an element with the taskList id.
        // appendChild method takes the new li element and 
        // appends it to the ul element assigned an id of taskList.
        document.getElementById("taskList").appendChild(li);
        // set the input element value back to nothing so 
        // the user can enter another todo item
        input.value = "";
    }
}