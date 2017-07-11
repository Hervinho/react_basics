'use strict';

//Use ES6 object destructuring.
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

//Render our React element.

render(
//Using JSX
React.createElement(
    'h1',
    { id: 'myTitle', className: 'myHeader', style: { backgroundColor: 'blue', color: 'black', fontFamily: 'verdana' } },
    'Hello World!!!'
), document.getElementById('react-container') //where we wanna render the element
);
