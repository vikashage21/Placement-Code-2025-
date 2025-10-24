import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  async function fetchProductDetails() {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    } finally {
      setLoading(false);
    }
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

  if (!product) {
    return <h3 className="text-center mt-5 text-danger">Product not found!</h3>;
  }

  const { title, price, description, category, image } = product;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-5 text-center">
          <img
            src={image}
            alt={title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        {/* Info Section */}
        <div className="col-md-7">
          <h2 className="fw-bold">{title}</h2>
          <p className="text-muted mb-1 text-capitalize">{category}</p>
          <h4 className="text-success fw-bold my-3">${price}</h4>
          <p>{description}</p>
          <button className="btn btn-warning btn-lg mt-3">
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
