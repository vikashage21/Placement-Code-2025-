
// const heading = React.createElement('h1', {
//     // this object is for attributes
//     id: 'heading'
// }, 'hello world from react js');
// // now creating root using reactDom


// // it will return an javascript object which is react element 
// console.log(heading)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // now rendering the heading using root

// root.render(heading);

// question : create a div which contains a h1 tag using react.createElement

// div >div > h1 

// import react and react dom
import React from "react"
import ReactDOM from "react-dom/client"

// creating heading element 
const heading = React.createElement('h1', {
    id: 'heading'
}, 'hello world from react js')

const heading2 = React.createElement('h1', {
    id: 'heading'
}, 'this is sibling of heading')


// creating a div which will contain heading

const div1 = React.createElement('div', {
    id: 'child'
}, [
    heading, heading2
])

// div1 will contain two heading as children - array of children 

// creating main div which will contain div1

const div = React.createElement('div', {
    id: 'main'
}, div1)


// creating root
const root = ReactDOM.createRoot(document.getElementById('root'))

// rendering the div
root.render(div)