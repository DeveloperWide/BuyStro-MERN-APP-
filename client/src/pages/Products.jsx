import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

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

  const truncateText = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  console.log(products)

  return (
    <div className="min-h-screen flex flex-wrap gap-10 my-4 mx-3 justify-center items-center overflow-x-hidden">
      {products && products.length > 0 ? (
        products.map((product, idx) => {
          return (
            <ProductCard Title={product.title} Description={product.description} ImageSrc={product.images[2]} productId={product._id} Price={product.price} key={idx}/>
          );
        })
      ) : (
        <div>No Product Found</div>
      )}
    </div>
  );
};
