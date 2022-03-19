import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../../services/postServices";


const SelectedPost = () => {


    const [post, setPost] = useState({});
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    let navigate = useNavigate();

    let { id } = useParams();

    id = Number(id);
    useEffect(() => {

        if (id) {
            postService.getOnePost(id)
                .then(res => {
                    console.log(res);
                    setPost(res);
                    setUserId(res.userId);
                    setTitle(res.title);
                    setBody(res.body);
                });
        }
    }, [id]);


    const postObject = {
        id: id || null,
        title,
        body,
        userId
    }

    const onSubmitButtonHandler = (e) => {
        e.preventDefault();

        if (postObject.id) {
            console.log(id);
            console.log(postObject);

            postService.updatePost(postObject)
                .then((res) => {
                    console.log(res);
                    navigate('/posts');
                });

        } else {
            console.log('THERE IS NO ID SET');
        
            postService.createPost(postObject)
                .then((res) => {
                    console.log(res);
                    navigate('/posts');
                });

        }
    }

    const onClickCancelButtonHandler = () => {
        navigate("/posts");
    }



    return (
        <div className="selected-post">
            <form onSubmit={onSubmitButtonHandler}>
                <label htmlFor="userId">UserId: </label>
                <br />
                <input
                    type="text"
                    name="userId"
                    id="userId"
                    onChange={(e) => setUserId(e.target.value)}
                    defaultValue={post.userId} />
                <br />
                <br />
                <label htmlFor="title">Title: </label>
                <br />
                <textarea
                    name="title"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    cols="40"
                    rows="4"
                    defaultValue={post.title}></textarea>
                <br />
                <br />
                <label htmlFor="body">Content: </label>
                <br />
                <textarea
                    name="body"
                    id="body"
                    onChange={(e) => setBody(e.target.value)}
                    cols="40"
                    rows="10"
                    defaultValue={post.body}></textarea>
                <br />
                <br />
                <input type="button" onClick={onClickCancelButtonHandler} value="Cancel" />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}

export default SelectedPost;
