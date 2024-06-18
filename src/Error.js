import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="errorPage">
      <h1>404 - Page Not Found</h1>
      <button className="homepagebtn">
        <Link to="/" className="linktext">
          Go Back Home
        </Link>
      </button>
    </div>
  );
};

export default Error;
