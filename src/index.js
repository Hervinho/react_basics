//Use ES6 object destructuring.
//const {render} = ReactDOM
import React from 'react'
import {render} from 'react-dom' //render property comes from React DOM
import {hello, bye} from './lib'

//Render our React element.
render( 
    //Using JSX
    /*<h1 id='myTitle' className='myHeader' style = {{backgroundColor: 'blue', color: 'black', fontFamily: 'verdana'}} >
        Hello World! It's Hervinho
    </h1>,*/
    <div>
        {hello}
        {bye}
    </div>,
    document.getElementById('react-container') //where we wanna render the element
)