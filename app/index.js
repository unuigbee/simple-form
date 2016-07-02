// Entry file for our app
// Here we import the neccessary componenet and React modules to render our home component
// to the DOM
import React from 'react';
import { render } from 'react-dom';
import Home from './components/Home';

// We call the render method from 'react-dom' to render/mount our component onto
// the div/app element
render(<Home />, document.getElementById('app'));
