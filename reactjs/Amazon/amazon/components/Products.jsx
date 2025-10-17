import React from "react";
import Navbar from "./Navbar";
import ClassBase from "./ClassBase";

function Products({ items , setData }) {

function handelTopRatedProduct(items) {
    return setData((preItems)=>{
        return preItems.filter((item)=> item.rating.rate >=4.0)

    })
  
}
    
  return (
    <>
      <Navbar />
      <ClassBase sName='vikash'/>
      <div className="card-header bg-white border-0 pb-0  mt-2"  >
        <button onClick={handelTopRatedProduct}>Top Rated Products</button>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 mt-5 col-8  offset-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="card p-3 shadow-sm"
            style={{ width: "220px", textAlign: "center" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top"
              style={{ height: "200px", objectFit: "contain" }}
            />

            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text mb-1">Price: ${item.price}</p>
              <p className="card-text">Rating: {item.rating.rate}⭐</p>
              <button className="btn btn-primary w-100">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
