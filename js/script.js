let tasks = [
    {
        name: "Lorem ipsum dolor sit amet consectetur",
        status: "finished"
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur",
        status: "partial"
    },
    {
        name: "Lorem ipsum dolor sit amet consectetur",
        status: "in-progress"
    }
];

displayTable();

// Add New Task
function addTask() {
    let task = document.querySelector("#task");
    tasks.push({
        name: task.value,
        status: "partial"
    });
    task.value = "";
    displayTable();
}
// update status when clicked task
function updateStatus(index) {
    console.log(index);
    let statuses = ["partial", "In-Progress", "Finished"];
    let statusesIndex = statuses.indexOf(tasks[index].status);
    ++statusesIndex;
    if (statusesIndex > 2) statusesIndex = 0;
    tasks[index].status = statuses[statusesIndex];
    displayTable();
}

//  detete clicked task
function deleleTask(index) {
    console.log(index);
    tasks.splice(index, 1);
    displayTable();
}

// Render The Task Array Using JS
function displayTable() {
    let table = document.querySelector("table");
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }

    let index = 0;

    tasks.forEach(task => {
        let tableRow = document.createElement("tr");
        let name = document.createElement("td");
        let status = document.createElement("td");
        let deleteTask = document.createElement("td");

        name.innerText = task.name;
        status.innerText = task.status;
        status.classList.add(task.status.toLowerCase());

        deleteTask.classList.add("fa");
        deleteTask.classList.add("fa-trash");
        deleteTask.setAttribute("onclick", "deleleTask("+index+")")
        status.setAttribute("onclick", "updateStatus("+index+")")
        ++index;

        tableRow.appendChild(name);
        tableRow.appendChild(status);
        tableRow.appendChild(deleteTask);

        table.appendChild(tableRow);
    });
}