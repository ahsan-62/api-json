function allPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(data){

    const postContainer=document.getElementById('post-container');
    for(post of data){
        const postDiv=document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML=`
        
        <h4>User Id: ${post.userId}</h4>
        <h3>Post Id: ${post.id}</h3>
        <h3>Post Title: ${post.title}</h3>
        <p>Post Body: ${post.body}</p>
        `


        postContainer.appendChild(postDiv);
    }
}

allPost();