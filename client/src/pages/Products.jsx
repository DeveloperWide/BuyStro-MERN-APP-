import axios from "axios";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/product/all")
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products);

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
      {products && products.length > 0 ? (
        products.map((product, idx) => {
          return (
            <div className="card bg-base-100 w-96 shadow-sm" key={idx}>
              <figure>
                <img src={product.images[2]} alt={product.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
};
