import axios from "axios";
import { setAccessToken, setUser } from "../redux/authSlice/authSlice";

export const login = (formData) => async (dispatch) => {
  axios
    .post("/api/auth/login", formData)
    .then((res) => {
      console.log(res.data);
      dispatch(setAccessToken(res.data.accessToken));
      dispatch(setUser(res.data.user));
    })
    .catch((err) => {
      console.log(err);
    });
};
