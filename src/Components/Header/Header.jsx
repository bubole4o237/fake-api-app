import { Link } from "react-router-dom";

const Header = () => {
    return (
        // <header>
        <div>
            <h1>Welcome to our website</h1>
            <p>This is a ReactJS app using a fake api including CRUD operations on posts. </p>
            <Link to="/create/post">
                <button>Create new post</button>
            </Link>
        </div>
        // </header>
    );
}

export default Header;
