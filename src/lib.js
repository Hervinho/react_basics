import React from 'react'
import text from './titles.json'
import './styles/hello.css'
import './styles/bye.scss'

export const hello = (
    <h1 id='title' className='hello'>
        {text.hello}
    </h1>
)

export const bye = (
    <h1 id='title' className='bye'>
        {text.goodbye}
    </h1>
)