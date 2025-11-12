import axios from "axios";
import { useDispatch } from "react-redux";
import axiosInstance from "./axiosInstance";
export const truncateText = (text, limit) => {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

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
