import React from "react";
import { Link } from "react-router-dom";

function TopRatedProduct({ items }) {
  let ratedProduct = items.filter((item) => item.rating.rate > 4);

  return (
    <div className="d-flex flex-wrap ">
      {ratedProduct.map((item) => {
        return (
          <>
            <div key={item.id} className="col-md-3 mb-4">
              <Link
                to={`/products/${item.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card h-100 shadow-sm">
                    <div className="bg-danger w-50 rounded text-center m-2 text-white">Top rated</div>
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
          </>
        );
      })}
    </div>
  );
}

export default TopRatedProduct;
