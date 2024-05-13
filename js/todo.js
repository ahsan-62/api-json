

function allTodo(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodo(data))
}

function displayTodo(todos){
    const todoContainer=document.getElementById('todo-container');

    for( const  todo of todos ){

        const div=document.createElement('div');

        div.innerHTML=`
        
        <h5> User ID: ${todo.userId}</h5>
        <h5> ID: ${todo.id}</h5>
        <h5> Title: ${todo.title}</h5>
        <h5> Completed: ${todo.completed ===true ? 'Completed' : 'Not Completed'}</h5> 
        `

        todoContainer.appendChild(div);    //ternary operator.If else er mto check kore

    }
}

      allTodo();