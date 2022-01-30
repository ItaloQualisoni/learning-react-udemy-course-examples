import ReactDOM from 'react-dom'
import React from 'react'

var objOne = {
    name:'Italo',
    location:'Brazil'
}

var objTwo = {
    age:25,
    ...objOne
}

console.log(objTwo)


ReactDOM.render(
    <h1>Boilerplate app</h1>,
    document.getElementById('app')
)
