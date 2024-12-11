//Array of tasks
const tasks = [
    { name: "Phase 0", completed: true},
    { name: "Phase 1", completed: false},
    { name: "Phase 2", completed: false},
    { name: "Phase 3", completed: false},
    { name: "Phase 4", completed: false},
    { name: "Phase 5", completed: false},
];

//Select DOM elements
const taskList = document.getElementById("task-list");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

//Render tasks dynamically in the list
const renderTasks = () => {
    taskList.innerHTML = ""; //Clear the list before re-rendering
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type
    })
}
//Add an event listener to each checkbox
//when checkbox is toggled, 
//update completed property for corresponding task
//Recalculate the progress
const calculateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    return (completedTasks / tasks.length) * 100
}

//Save user's progress with local storage
localStorage.setItem("tasks", JSON.stringify(tasks));