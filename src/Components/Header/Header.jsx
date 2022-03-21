import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="div-header">
                <Link to="/">
                    <button className="button-header home-btn">Home</button>
                </Link>
                <h1 className="h1-header">Welcome to our website for posts</h1>
                <Link to="/create/post">
                    <button className="button-header create-btn">Create post</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
