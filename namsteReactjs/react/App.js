import React from "react";
import ReactDOM from 'react-dom/client'
const heading1 = React.createElement('h1', {
    className:"heading1",
    key:"h1"

}, 'heading1');
const heading2 = React.createElement('h1', {
    className:"heading2",
    key:"h2"
}, 'heading2');
const Container = React.createElement('div', {
    id: "container",
    className:"box"
}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(Container)
