import React, { useState } from "react";
import "../../public/card.css";

function Cards() {
  const [products, setProducts] = useState([
    {
      id: 101,
      imageurl:
        "https://imgs.search.brave.com/th65H9Mv9lmZjEL_ijxXYG74fZA0RYXpTy4R3SObUCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXByZW1lbW9iaWxlcy5pbi9jZG4vc2hvcC9maWxlcy9HYWxheHlTMjUtNi45aW5jaGVzLndlYnA_dj0xNzM3NjI0ODk5JndpZHRoPTExMDA",
      name: "Samsung Galaxy S25",
      price: 6000,
      qty: 1,
      stock: 0,
    },
    {
      id: 102,
      imageurl:
        "https://imgs.search.brave.com/th65H9Mv9lmZjEL_ijxXYG74fZA0RYXpTy4R3SObUCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXByZW1lbW9iaWxlcy5pbi9jZG4vc2hvcC9maWxlcy9HYWxheHlTMjUtNi45aW5jaGVzLndlYnA_dj0xNzM3NjI0ODk5JndpZHRoPTExMDA",
      name: "iPhone 15",
      price: 12000,
      qty: 1,
      stock: 5,
    },
    {
      id: 104,
      imageurl:
        "https://imgs.search.brave.com/th65H9Mv9lmZjEL_ijxXYG74fZA0RYXpTy4R3SObUCk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdXByZW1lbW9iaWxlcy5pbi9jZG4vc2hvcC9maWxlcy9HYWxheHlTMjUtNi45aW5jaGVzLndlYnA_dj0xNzM3NjI0ODk5JndpZHRoPTExMDA",
      name: "Nokia Edge",
      price: 5000,
      qty: 1,
      stock: 8,
    },
  ]);

  // increment function (per product)
  const increment = (id) => {
    const updated = products.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty + 1, price: item.price + 6000 }
        : item
    );
    setProducts(updated);
  };

  function grandTotal() {
    return products.reduce((total, item) => total + item.qty * item.price, 0);
  }
  let [islogged, setLogged] = useState(true);
  return (
    <div className="card-container">
      <h2 className="title">📱 Product List</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>stock</th>
            <th>Price (₹)</th>
            <th>Qty</th>
          </tr>
          <tr className="col-span">grandTotal</tr>
        </thead>

        <tbody>
          

           {
              islogged ? <>
            {products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.imageurl} alt={item.name} width="80" />
                </td>
                <td>{item.name}</td>
                <td>
                  {item.stock === 0 && <span>out of stock</span>}

                  {item.stock > 0 && item.stock <= 10 ? (
                    <span> almost out of stock</span>
                  ) : null}

                  {item.stock >= 10 && <span>stock is Available</span>}
                </td>
                <td>{item.price.toLocaleString("en-IN")}</td>
                <td>
                  {item.qty}
                  <button
                    className="btn"
                    onClick={() => increment(item.id)}
                    title="Increase Quantity"
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
            <th>
              grandTotal
            </th>
            <td> {grandTotal()}</td>

           
         </>:""
            }
        </tbody>
      </table>
    </div>
  );
}

export default Cards;
