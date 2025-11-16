import axiosInstance from "../utils/axiosInstance";

export const getCart = async () => await axiosInstance.get("/cart/all");

export const addItem = async (productDetails) =>
  await axiosInstance.post("/cart/add", productDetails);
export const updateQuantity = async (id, obj) =>
  await axiosInstance.patch(`/cart/update/${id}`, obj);

export const deleteItem = async (id) =>
  await axiosInstance.delete(`/cart/remove/${id}`);
