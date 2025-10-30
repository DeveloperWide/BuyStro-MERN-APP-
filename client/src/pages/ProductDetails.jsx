import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        setProductDetails(res.data.product);
      })
      .catch((err) => {
        console.log("Error While Fetching Product Details");
        console.log(err);
      });
  }, [id]);

  console.log(productDetails);

  return (
    <div>
      {productDetails && productDetails.title ? (
        <>
          {" "}
          <h2>{productDetails.title}</h2>
          <br />
          <p>{productDetails.description}</p>
          <br />
          <div className="images flex gap-3 items-center">
            {productDetails &&
              productDetails.images &&
              productDetails.images.map((img, idx) => {
                return (
                  <img
                    src={img}
                    alt={productDetails.title}
                    className="h-20 w-20 rounded"
                  />
                );
              })}
          </div>
        </>
      ) : (
        <div className="errorMsg">No Product Found</div>
      )}
    </div>
  );
};

export default ProductDetails;
