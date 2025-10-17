import React from "react";
import Loader from "../components/Loader";
import Products from "../components/Products";
import { useEffect, useState } from "react";


// create a state to store the data

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    setData(data);
  }
  if (data.length === 0) {
    return <Loader /> 
  }
  return <Products items={data} setData={setData} />;
}

export default App;
