const notepadButton = document.getElementById("notepadButton");
const notepad = document.getElementById("notepad");
const closeNotepad = document.getElementById("closeNotepad");

const checkboxes = document.querySelectorAll(".task-check");
const taskTexts = document.querySelectorAll(".task-text");

const sun = document.querySelector(".sun");



/* ---------- OPEN NOTEPAD ---------- */

notepadButton.addEventListener("click", function () {
    notepad.style.display = "block";
});


/* ---------- CLOSE NOTEPAD ---------- */

closeNotepad.addEventListener("click", function () {
    notepad.style.display = "none";
});


/* ---------- SUN PROGRESS ---------- */

function updateSun() {

    let completedTasks = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            completedTasks++;
        }
    });

    if (completedTasks === 0) {
        sun.style.bottom = "25%";
        document.querySelector(".window").style.backgroundColor = "#5b7199";
    }

    if (completedTasks === 1) {
        sun.style.bottom = "38%";
        document.querySelector(".window").style.backgroundColor = "#7896b5";
    }

    if (completedTasks === 2) {
        sun.style.bottom = "51%";
        document.querySelector(".window").style.backgroundColor = "#9fc1d1";
    }

    if (completedTasks === 3) {
        sun.style.bottom = "64%";
        document.querySelector(".window").style.backgroundColor = "#87ceeb";
    }
}


/* ---------- TASK COMPLETION ---------- */

checkboxes.forEach(function (checkbox, index) {

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            taskTexts[index].classList.add("completed");
        } else {
            taskTexts[index].classList.remove("completed");
        }

        updateSun();

    });

});