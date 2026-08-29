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
        sun.style.bottom = "42%";
    }

    if (completedTasks === 1) {
        sun.style.bottom = "52%";
    }

    if (completedTasks === 2) {
        sun.style.bottom = "62%";
    }

    if (completedTasks === 3) {
        sun.style.bottom = "72%";
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