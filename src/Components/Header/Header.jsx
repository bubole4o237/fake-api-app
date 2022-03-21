import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="div-header">
                <Link to="/">
                    <button className="button-header hom-btn">Home</button>
                </Link>
                <h1 className="h1-header">Welcome to our website for posts</h1>
                {/* <p>This is a ReactJS app using a fake api including CRUD operations on posts. </p> */}
                <Link to="/create/post">
                    <button className="button-header">Create new post</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
