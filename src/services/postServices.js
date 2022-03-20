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

const getAll = async (currentPage, userPosts) => {

    let page = currentPage ? currentPage : 1;
    let queryString = userPosts ? userPosts : '';

    const result = await fetch(`https://jsonplaceholder.typicode.com/${queryString}posts?_page=${page}&_limit=9`);
    const total = result.headers.get('x-total-count');
    const data = await result.json();
    const arrayRes = [data, total];
    return arrayRes;
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
}


////// Object to export with all CRUD functionalities ///////

const postService = {
    createPost,
    getAll,
    getOnePost,
    updatePost,
    deletePost
}

export default postService;