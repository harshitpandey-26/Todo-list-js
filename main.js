let todoList = [{
    name:'',
    dueDate: ''}];

function renderTodo(){
    let todolistHtml = '';

    for(let i = 0;i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;

        if(name && dueDate){
        const html = `
        <div class="todo-item">
        <div>${name}</div>
         <div>${dueDate}</div> 
        <button style =" height: 50px;
            width: 110px;
            border-radius: 5px;
            padding: 10px;
            background-color: red;
            color: white;
            font-size: 18px;
            border: none;
            cursor:pointer;" onclick="
            todoList.splice(${i},1)
            renderTodo()
        ">Delete</button>
        </div>
        </p>`; 
        todolistHtml +=html;
    }
}

    document.querySelector('#display').innerHTML = todolistHtml;
}


function addTodo(){
    const inputValue = document.querySelector('#js-todoname');
    const value = inputValue.value;

    const dueDateInput = document.querySelector('#dateInp');
    const dueDatevalue = dueDateInput.value;

    todoList.push({
        name: value,
        dueDate: dueDatevalue,
    });

    // console.log(todoList);

    inputValue.value = '';
    dueDatevalue.value = '';

    renderTodo();;
}


const inputField = document.querySelector('#js-todoname');
inputField.addEventListener('keydown', function(event) {
    if (event.key === "Enter") { 
        addTodo();    }
});