// UI variables
const form = $("#task-form");
const taskList = $(".collection");
const clearButton = $(".clear-tasks");
const filter = $("#filter");
const taskInput = $("#task");

// GET TASK
$(document).ready(() => {
	let tasks;
	if (localStorage.getItem("task") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("task"));
	}
	tasks.forEach(task => {
		const li = document.createElement("li");
		li.className = "collection-item";

		li.append(document.createTextNode(task));
		const link = document.createElement("a");
		link.className = "delete-item secondary-content";
		link.innerHTML = "<i class='fa fa-remove'></i>";
		li.append(link);
		taskList.append(li);
	});
});
// ADD TASK
form.on("submit", e => {
	if (taskInput.value === "") alert("Add new task");

	e.preventDefault();

	const li = document.createElement("li");
	li.className = "collection-item";

	li.append(document.createTextNode(taskInput.val()));
	const link = document.createElement("a");
	link.className = "delete-item secondary-content";
	link.innerHTML = "<i class='fa fa-remove'></i>";
	li.append(link);
	taskList.append(li);

	//store everything in localstorage
	let tasks;
	if (localStorage.getItem("task") === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem("task"));
	}
	tasks.push(taskInput.val());
	localStorage.setItem("task", JSON.stringify(tasks));
	taskInput.val("");
});

// DELETE ITEM
taskList.on("click", e => {
	let todel;
	let parent = e.target.parentElement;
	if (parent.classList.contains("delete-item")) {
		parent.parentElement.remove();

		let tasks;
		if (localStorage.getItem("task") === null) {
			tasks = [];
		} else {
			tasks = JSON.parse(localStorage.getItem("task"));
		}

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
filter.keyup(e => {
	const text = $("input[name=filter]")
		.val()
		.toLowerCase();

	console.log(text);

	$(".collection-item").each(function(i) {
		// console.log($(this).text());
		let foo = $(this)
			.text()
			.toLowerCase();
		console.log($(this));
		// if (foo.indexOf(text) != -1) $(this).css("display", "block");
		// else $(this).css("display", "none");
	});

	document.querySelectorAll(".collection-item").forEach(function(task) {
		console.log(task);
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = "block";
		} else {
			task.style.display = "none";
		}
	});
});
