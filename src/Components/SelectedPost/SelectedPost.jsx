import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import postService from "../../services/postServices";
import verification from "../../services/verification";

import './SelectedPost.css';

const SelectedPost = ({ isUpdate }) => {

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
        } else {
            setUserId('');
            setTitle('');
            setBody('');
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

        let myUserId = isUpdate ? userId : userId.trim();
        let myTitle = title.trim();
        let myBody = body.trim();

        if (
            (myUserId === '') ||
            (myTitle === '') ||
            (myBody === '')
        ) {
            alert("There is a missing data!");
            return;
        }


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
        // navigate('/posts/83');
    }


    return (
        <div className="selected-post">
            <form onSubmit={onSubmitButtonHandler}>
                <label htmlFor="userId">User Id: </label>
                <br />
                <input
                    disabled={isUpdate}
                    required={true}
                    type="text"
                    name="userId"
                    id="userId"
                    onChange={(e) => {
                        if (verification.verifyUserInput(e.target.value, 'user ID') === false) {
                            e.target.value = '';
                            return;
                        }
                        setUserId(e.target.value)
                    }}
                    placeholder="user id"
                    defaultValue={isUpdate ? post.userId : ''} />
                <br />
                <br />
                <label htmlFor="title">Title: </label>
                <br />
                <textarea
                    required={true}
                    name="title"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    cols="40"
                    rows="4"
                    placeholder="Title of the new post"
                    defaultValue={isUpdate ? post.title : ""}></textarea>
                <br />
                <br />
                <label htmlFor="body">Content: </label>
                <br />
                <textarea
                    required={true}
                    name="body"
                    id="body"
                    onChange={(e) => setBody(e.target.value)}
                    cols="40"
                    rows="10"
                    placeholder="Content of the post"
                    defaultValue={isUpdate ? post.body : ""}></textarea>
                <br />
                <br />
                <input className="cancel-btn" type="button" onClick={onClickCancelButtonHandler} value="Cancel" />
                <input className="save-btn" type="submit" value="Save" />
            </form>
        </div>
    );
}

export default SelectedPost;
