import { Link } from 'react-router-dom';
import './PageNotFound.css';


const PageNotFound = () => {
    return (
        <div className="page-not-found">

            <p>Page not found</p>
            <Link to="/">
                <button className="back-btn">Back</button>
            </Link>

        </div>
    );
}

export default PageNotFound;
