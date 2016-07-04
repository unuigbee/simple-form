import React from 'react';
import { Link } from 'react-router';
import UserDetails from '../components/UserDetails';

// component for linking back to Home/Form
function StartOver() {
  return (
    <div>
      <Link to="/">
        <button type="button" className="btn btn-lg btn-danger">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

const Results = (props) => {
  // If our data is still loading we show the loading screen
  if (props.isLoading === true) {
    return (
      <div className="jumbotron text-center">
        <h1>Loading User Data...</h1>
      </div>
    );
  }

  // We map through each user in our array and return their details
  const users = props.users.map(function(user){
    return (
      <UserDetails key={user.id} user={user} />
    );
  });

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>User Information</h1>
        <StartOver />
      </div>
      {users}
    </div>
  );
};
export default Results;
