import React from 'react';
import { Link } from 'react-router';

const Success = (props) => {
  return (
    <div className="jumbotron text-center">
      <h1>Thank You!</h1>
      <p>Your submission was succesful</p>
      <Link to="/results">
        <button type="button" className="btn btn-lg btn-success">
          View Users
        </button>
      </Link>
      <Link to="/">
        <button type="button" className="btn btn-lg btn-danger">
          Go back to home
        </button>
      </Link>
    </div>
  );
};
export default Success;
