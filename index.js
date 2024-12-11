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
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

//Fundtion to update progress
const updateProgress = () => {
    const completedTasks = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
    const totalTasks = checkboxes.length;
    const progress = (completedTasks / totalTasks) *100;

    progressBar.style.width = `${progress}%` ;
    progressText.textContent = `Progress: ${Math.round(progress)}`;
};

//Add an event listener to checkboxes
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateProgress);
});

//Recalculate the progress
updateProgress();
