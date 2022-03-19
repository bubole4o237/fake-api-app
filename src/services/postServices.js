

//////// Get ALL posts ///////

const getAll = () => {

    
    // return fetch('https://jsonplaceholder.typicode.com/posts')
    return fetch('https://jsonplaceholder.typicode.com/posts?_page=2&_limit=9')
    .then((response) => response.json());
    // .then((json) => console.log(json));
}

const postService = {
    getAll
}

export default postService;