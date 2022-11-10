var todoList = [];
var arrayElements = 0;

function TodoData(task,scheduledDate){
    this.task = task;
    this.scheduledDate = scheduledDate;
}

var taskField = document.querySelectorAll('input')[0];
var dateField = document.querySelectorAll('input')[1];
var saveButton = document.getElementById('saveButton');
var tableBody = document.querySelector('tbody');

function addElement(){
    var task = taskField.value;
    var date = dateField.value;
    var todo = new TodoData(task,date);
    todoList.push(todo);
    console.log(todoList)
    var tableRowNode = document.createElement('tr');
    tableRowNode.setAttribute('id','element-row'+arrayElements);
    tableBody.appendChild(tableRowNode);

    var tableDataNode1 = document.createElement('th');
    tableDataNode1.setAttribute('scope','row');
    tableDataNode1.textContent = arrayElements+1;
    document.getElementById('element-row'+arrayElements).appendChild(tableDataNode1);

    var tableDataNode2 = document.createElement('td');
    tableDataNode2.textContent = todoList[arrayElements].task;
    document.getElementById('element-row'+arrayElements).appendChild(tableDataNode2);

    var tableDataNode3 = document.createElement('td');
    tableDataNode3.textContent = todoList[arrayElements].scheduledDate;
    document.getElementById('element-row'+arrayElements).appendChild(tableDataNode3);

    var tableDataNode4 = document.createElement('td');
    tableDataNode4.innerHTML = `<button id='delete${arrayElements}' class='btn btn-xs btn-danger' onClick='deleteElement(${arrayElements})'><i class='bi bi-trash'></i></button>`
    document.getElementById('element-row'+arrayElements).appendChild(tableDataNode4);

    arrayElements = arrayElements + 1;
}

function deleteElement(index){
    todoList.splice(index,1);
    console.log(todoList)
    document.getElementById('element-row'+(index)).remove();
    console.log("Remove, Array Elements : ",arrayElements)
    arrayElements = arrayElements - 1;
    console.log(arrayElements);
}