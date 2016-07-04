// Entry file for our app
// Here we import the neccessary components and React modules to render our routes and
// pages to the DOM
import React from 'react';
import { render } from 'react-dom';
import routes from './config/routes.js'

// We call the render method from 'react-dom' to render/mount our component onto
// the div/app element.
render(routes, document.getElementById('app'));
