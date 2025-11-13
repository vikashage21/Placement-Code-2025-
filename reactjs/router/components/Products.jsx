import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import DinoGame from "../components/DinoGame";
import TopRatedProduct from "./TopRatedProduct";

export function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  let onlineStatus = useOnlineStatus();

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (onlineStatus == false) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <DinoGame />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">🛍️ Products</h2>
      <h1 className="font-monospace">Top Rated Products</h1>
      <TopRatedProduct items={data} />

      <hr />

      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 mb-4">
            <Link
              to={`/products/${item.id}`}
              className="text-decoration-none text-dark"
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  alt={item.title}
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title text-truncate">{item.title}</h6>
                  <p className="fw-bold mb-0">${item.price}</p>
                  <p className="fw-bold mb-0">{item.rating.rate}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
