const heading = React.createElement('h1', {
    // this object is for attributes
    id: 'heading'
}, 'hello world from react js');
// now creating root using reactDom

const root = ReactDOM.createRoot(document.getElementById('root'));
// now rendering the heading using root

root.render(heading);