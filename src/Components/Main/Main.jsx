import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import postService from '../../services/postServices';
import Post from '../Post/Post';

import verification from '../../services/verification';

import './Main.css';



const Main = () => {

    const [posts, setPosts] = useState([]);

    const [pageCount, setPageCount] = useState(0);

    const [search, setSearch] = useState('');

    let navigate = useNavigate();
   

    useEffect(() => {
        postService.getAll(1, search)
            .then(res => {

                const total = res[1];
                console.log(total);
                setPageCount(Math.ceil(total / 9));
                setPosts(res[0]);
                console.log('LOG from useEffect');
            });

    }, [search]);


    const onPageClickHandler = async (data) => {

        let currentPage = data.selected + 1;

        const postsFromServer = await postService.getAll(currentPage, search);
        console.log(postsFromServer);
        setPosts(postsFromServer[0]);
    }

    const searchUserPosts = (e) => {
        let input = e.target.value;
        if (input === '') {
            setSearch('');
            navigate(`/posts`);

            return;
        }

        if (verification.verifyUserInput(input, 'userId') === false) {
            return;
        }
        

        let searchPattern = `users/${input}/posts`;
        console.log(searchPattern);

        setSearch(searchPattern);

        navigate(`/user/${Number(input)}/posts`);

    }


    const searchPostById = (e) => {
        let input = e.target.value;
        if (input === '') {
            setSearch('');
            navigate(`/posts`);

            return;
        }

        if (verification.verifyUserInput(input, 'postId') === false) {
            return;
        }

        let searchPattern = `posts/${input}`;
        console.log(searchPattern);

        setSearch(searchPattern);

        navigate(`/posts/${Number(input)}`);
    }


    const resetInput = (e) => {
        e.target.value = '';
    }


   

    return (
        <main>
            <p>Search post/s by:</p>
            <input
                type="text"
                onChange={searchUserPosts}
                onBlur={resetInput}
                name="search"
                id="search"
                placeholder='User ID'
            />
            <span> or </span>
            <input
                type="text"
                onChange={searchPostById}
                onBlur={resetInput}
                name="searchPost"
                id="searchPost"
                placeholder='Post ID'
            />

            {/* <h2>List of the posts</h2> */}

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
                marginPagesDisplayed={6}
                // pageRangeDisplayed={1}
                onPageChange={onPageClickHandler}
                containerClassName={'pagination-ul'}
                pageClassName={'page-ul-li'}
                pageLinkClassName={'page-link'}
            />

        </main>
    );
}

export default Main;
