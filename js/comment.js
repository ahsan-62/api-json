
function getComment(){

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json()
    .then(data => displayComment(data)))
}

 function displayComment(data){

    const commentContainer=document.getElementById('comment-container');
    for(const comment of data){
        const commentDiv=document.createElement('div');
        commentDiv.innerHTML=`
        <h5>User ID: ${comment.id}</h5>
        <h5>Name: ${comment.name}</h5>
        <h5>Email: ${comment.email}</h5>
        <h5>Body: ${comment.body}</h5>
        `
        commentContainer.appendChild(commentDiv);
    }
}

 getComment();

