
// // const heading = React.createElement('h1', {
// //     // this object is for attributes
// //     id: 'heading'
// // }, 'hello world from react js');
// // // now creating root using reactDom


// // // it will return an javascript object which is react element 
// // console.log(heading)

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // now rendering the heading using root

// // root.render(heading);

// // question : create a div which contains a h1 tag using react.createElement

// // div >div > h1 

// // import react and react dom
// import React from "react"
// import ReactDOM from "react-dom/client"

// // creating heading element 
// const heading = React.createElement('h1', {
//     id: 'heading'
// }, 'hello world from react js')

// const heading2 = React.createElement('h1', {
//     id: 'heading'
// }, 'this is sibling of heading')


// // creating a div which will contain heading

// const div1 = React.createElement('div', {
//     id: 'child'
// }, [
//     heading, heading2
// ])

// // creating react element 

// const jsHeading = <h1 id="heading"> Hello from JSX </h1>



// // div1 will contain two heading as children - array of children 



// // creating main div which will contain div1

// // const div = React.createElement('div', {
// //     id: 'main'
// // }, div1)


// const div = React.createElement('div', {
//     id: 'main',

// }, [jsHeading, div1])



// // creating a other component 

// const TitleComponent = () => {
//     return <h1> this is title component </h1>
// }

// // creating react functional components


// // what is a component ? - it is a function which returns react element

// // what is component composition ? - using one component inside another component


// function App() {
//     return (
//         <div id="main">
//             {/* component composition */}
//             <TitleComponent />
//             <h1 id="heading">this is functional component in react </h1>
//         </div>
//     )
// }


// // creating root
// const root = ReactDOM.createRoot(document.getElementById('root'))

// // rendering the div

// // root.render(div)

// root.render(<App />)



// // rendering APP component root.render(<App/>)







import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProductDetails from "./components/ProductDetails";
import { createContext } from "react";
import PostForm from "./components/PostForm";
import useFetchHook from "./utils/useFetchHook";
import { Provider } from "react-redux";
import store from "./utils/appStore.js";
import Carts from "./components/Carts.js";

export const DataContext = createContext();

const App = () => {
    // Redux state
    

    // your custom hook
    let data = useFetchHook();
    const recipes = data.recipes || [];

    console.log(recipes)

    return (
        <BrowserRouter>

        <Provider store={store}>
                <Header />

                <DataContext.Provider value={recipes}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />

                        <Route path="/productdetails/:id" element={<ProductDetails />} />
                        <Route path="/post" element={<PostForm />} />
                        <Route path="/cart" element={<Carts />} />
                    </Routes>
                </DataContext.Provider>

                <Footer />

        </Provider>
            </BrowserRouter>
    );
};

export default App;
