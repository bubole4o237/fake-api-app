import { Link, useNavigate } from 'react-router-dom';
import postService from '../../services/postServices';
import './Post.css';

const Post = ({ userId, id, title, body }) => {

    const post = {
        userId,
        id,
        title,
        body
    }

    const navigate = useNavigate();

    const onClickEditPostButtonHandler = () => {
        console.log(userId, id, title, body);
    }

    const onClickDeletePostButtonHandler = () => {

        const userConfirmation = prompt("You will delete this post Are you sure?", "Yes, I want to delete this item.");

        if (userConfirmation) {
            console.log(userConfirmation);

            postService.deletePost(post.id)
                .then((res) => {
                    console.log(res);
                    console.log(`The post: ${post.id} was deleted successfully!`);
                    navigate("/");
                });

        } else {
            console.log("The deletion is canceled.");
            return;
        }
    }



    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <p className="info-post"><span className="user-id">User: {post.userId}</span> / <span className='post-id'>Post: {post.id}</span></p>

                </div>

                <div className="post-body">
                    <h3>Title: {post.title}</h3>
                    <p>{post.body}</p>
                </div>
            </div>

            <div className="post-buttons">
                <button className="crudButtons del-btn" onClick={onClickDeletePostButtonHandler}>Delete
                </button>
                <Link to={`/posts/${id}/update`}>
                    <button className="crudButtons edit-btn" onClick={onClickEditPostButtonHandler}>Edit
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Post;
