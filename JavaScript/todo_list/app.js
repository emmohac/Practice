// UI variables
const form = $("#task-form");
const taskList = $(".collection");
const clearButton = $(".clear-tasks");
const filter = $("#filter");
const taskInput = $("#task");

// GET TASK
$(document).ready(() => {
    let tasks = makeTask()

    tasks.forEach(task => {
        const elem = `<li class="collection-item">${task}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`
        taskList.append(elem)
    });
});
// ADD TASK
form.on("submit", e => {
    if (taskInput.value === "") alert("Add new task");

    e.preventDefault();
    const elem = `<li class="collection-item">${taskInput.val()}<a class="delete-item secondary-content"><i class="fa fa-remove"></i></a></li>`
    taskList.append(elem)

    let tasks = makeTask()

    tasks.push(taskInput.val());
    localStorage.setItem("task", JSON.stringify(tasks));
    taskInput.val("");
});

// DELETE ITEM
taskList.on("click", function (e) {
    let parent = e.target.parentElement;
    if (parent.classList.contains("delete-item")) {
        parent.parentElement.remove();

        let tasks = makeTask()

        tasks.forEach((task, i) => {
            if (task === parent.parentElement.textContent) tasks.splice(i, 1);
        });

        localStorage.setItem("task", JSON.stringify(tasks));
    }
});

// CLEAR ITEMS
clearButton.on("click", e => {
    e.preventDefault();
    $("ul.collection")
        .children()
        .remove();
    localStorage.removeItem("task");
});

// SEARCH ITEM
filter.keyup(() => {
    const text = $("input[name=filter]")
        .val()
        .toLowerCase();

    $(".collection-item").each(function (i) {
        let task = $(this).text().toLowerCase()
        if (task.indexOf(text) != -1) {
            $(this).css("display", "block")
        } else {
            $(this).css("display", "none")
        }
    });
});

function makeTask() {
    let tasks;
    if (localStorage.getItem("task") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("task"));
    }
    return tasks
}