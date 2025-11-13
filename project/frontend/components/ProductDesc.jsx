import React from "react";
import "../ProductDesc.css";

function ProductDesc({ items }) {
  if (!items) return null;

  return (
    <div className="product-desc-container text-white p-4 rounded-4 shadow-lg mt-5">  
      <h3 className="fw-bold mb-3">{items.title || "Untitled Video"}</h3>

      <p className="text-light mb-3 fs-6">
        {items.description || "No description available."}
      </p>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <div>
          <p className="mb-1 text-secondary small">Uploaded by:</p>
          <h6 className="fw-semibold">
            👤 {items.uploadedBy || "Unknown Creator"}
          </h6>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
