import React from 'react';

// Simple component for used for wrapping all our routed pages in a container
const Main = (props) => {
  return (
    <div className="container">
      {props.children}
    </div>
  );
};
export default Main;
