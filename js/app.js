

function factoryData1(){


    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json))
}


function loadUsers(){
    const url='https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then( res=> res.json())
    .then(data => dataUser(data))
}


function dataUser(data){
    console.log(data);
}
