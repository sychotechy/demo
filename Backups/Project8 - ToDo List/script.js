let todoList = [];
function TodoData(task,scheduledDate){
    this.task = task;
    this.scheduledDate = scheduledDate;
}
var totalElements = 1;
document.getElementById('saveButton').addEventListener('click',function(){
    var task = document.querySelectorAll('input')[0].value;
    var scheduledDate = document.querySelectorAll('input')[1].value;
    if(task != ''){
        var todo = new TodoData(task, scheduledDate);
        todoList.push(todo);
        console.log(todoList);

        var tableRowNode = document.createElement('tr');
        tableRowNode.setAttribute('id','element-row'+totalElements);
        document.querySelector('tbody').appendChild(tableRowNode);
        addElements();
        console.log(totalElements)
        totalElements = totalElements + 1;
    }
    else{
        alert("Enter a valid task");
    }
})

function addElements(){
    var i=0;
    while(todoList.length>i){
        document.getElementById('element-row'+(i+1)).innerHTML = `
        <th scope='row'>${i+1}</th>\n
        <td>${todoList[i].task}</td>\n
        <td>${todoList[i].scheduledDate}</td>
        <td><button id='delete${i+1}' class='btn btn-xs btn-danger' onClick='deleteItem(${i})'><i class='bi bi-trash'></i></button></td>`;
        i = i + 1;
    }
}

function deleteItem(index){
    console.log("Delete Clicked, Index is ",index);
    todoList.splice(index,1);
    document.getElementById('element-row'+(index+1)).remove();
    console.log(totalElements)
    totalElements = totalElements - 1;
}