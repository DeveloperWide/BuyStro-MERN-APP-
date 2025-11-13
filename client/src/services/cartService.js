import axiosInstance from "../utils/axiosInstance";

export const addItem = (productDetails) => {
  axiosInstance
    .post("/cart/add", productDetails)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
