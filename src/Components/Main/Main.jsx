import { useEffect, useState } from 'react';
import postService from '../../services/postServices';
import Post from '../Post/Post';

import './Main.css';



const Main = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(res => {
                setPosts(res);
            });
    }, []);


    return (
        <main>
            <h2>The main content goes here!</h2>
            <div className="container-all-posts">

                {posts.map((post) => (
                    <Post
                        key={post.id}
                        userId={post.userId}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />)
                )}

            </div>
        </main>
    );
}

export default Main;
