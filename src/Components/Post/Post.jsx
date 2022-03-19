import './Post.css';

const Post = ({userId, id, title, body}) => {

    const post = {
        userId,
        id,
        title,
        body
    }


    return (
        <div className="post">
            <p>Post: {post.id} / User: {post.userId}</p>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
}

export default Post;
