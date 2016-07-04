import React from 'react';

// Our UserDetails stateless component for listing users details
const UserDetails = (props) => {
  return (
    <ul>
      <li>Firstname: {props.user.firstname}</li>
      <li>Surname: {props.user.surname}</li>
      <li>Email Adress: {props.user.email}</li>
      <li>Telephone: {props.user.telephone}</li>
      <li>Date of Birth: {props.user.date_of_birth}</li>
      <li>Gender: {props.user.gender}</li>
      <li>Comments: {props.user.comments}</li>
      <li>Extra Comments: {props.user.more_comments}</li>
    </ul>
  );
};
export default UserDetails;
