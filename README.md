# simple-form

A multi-step form application using React with Codeigniter as the backend implementation. Of course you can use any backend technology.
Includes examples creating components using es6 syntax, routing using React Router, data fetching using Axios and CSS scoping using CSS modules with Webpack. 

## Installation
1. Clone the repository to your server web space 
2. Import the sql schema script to install database 
3. [Configure Codeigniter](http://www.codeigniter.com/user_guide/installation/index.html)
4. Set Axios base url in [FormHelpers file](https://github.com/unuigbee/simple-form/blob/master/client/utils/FormSubmitHelper.js) e.g. ```axios.defaults.baseURL = 'http://www.example.com';```
5. run **npm install** at root of project to install client application
6. run **npm start** to get webpack dev server running or **webpack-dev-server --host www.example.com --port 80** if you want some flexibility 

## To Do
- [ ] Add client side form validation
- [ ] Improve reusability of components
- [ ] Refine CSS styles and add styling using SASS like preprocessor from PostCSS and plugin friends 
- [ ] Make Url endpoints more REST like 
- [ ] Improve documentation
