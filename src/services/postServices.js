///////////// Create post /////////////

const createPost = async (newPost) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: newPost.title,
            body: newPost.body,
            userId: newPost.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const result = response.json();
    console.log(result);
    return result;
}



//////// Get ALL posts ///////

const getAll = async () => {

    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=16');
    return result.json();
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    // return fetch('https://jsonplaceholder.typicode.com/posts?_page=2&_limit=9')
    // .then((response) => response.json());
    // .then((json) => console.log(json));
}


/////////// Get ONE post by ID /////////

const getOnePost = async (id) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return result.json();
}



/////////////// Update Post  ///////////////

const updatePost = async (post) => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    console.log(`The post: ${post.id} was successfully updated!`);
    return response.json();

}


/////////// Delete Post by ID ///////////////

const deletePost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    });
    // .then(res => {
    //     console.log(res); 
    //     console.log("ole");
    //     return (res);
    // });
}





const postService = {
    createPost,
    getAll,
    getOnePost,
    updatePost,
    deletePost
}

export default postService;