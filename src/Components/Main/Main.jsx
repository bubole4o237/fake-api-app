import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import postService from '../../services/postServices';
import Post from '../Post/Post';

import './Main.css';



const Main = () => {

    const [posts, setPosts] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    
    // useEffect(() => {
    //     postService.getAll()
    //         .then(res => {
    //             setPosts(res);
    //         });
    // }, []); 

    useEffect(() => {
        postService.getAll(1,'')
        .then(res => {

            const total = res[1];
            console.log(total);
            setPageCount(Math.ceil(total/9));
            setPosts(res[0]);
            console.log('LOG from useEffect');
        }); 
 
    }, []);


    const onPageClickHandler = async (data) => {
       
        let currentPage = data.selected + 1;

        const postsFromServer = await postService.getAll(currentPage, '');
        console.log(postsFromServer);
        setPosts(postsFromServer[0]);
    }


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

            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={10}
                // pageRangeDisplayed={3}
                onPageChange={onPageClickHandler}
                containerClassName={'pagination-ul'}
                pageClassName={'page-ul-li'}
                pageLinkClassName={'page-link'}
            />

        </main>
    );
}

export default Main;
