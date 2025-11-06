import { useState } from "react";
import { login } from "../utils/authHelper";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <form className="p-2" onSubmit={onSubmitHandler}>
      <input
        type="email"
        name="email"
        placeholder="johndoe9239@gmail.com"
        className="email"
        onChange={onChangeHandler}
        value={formData.email}
      />

      <br />
      <br />

      <input
        type="password"
        name="password"
        placeholder="john@92399"
        className="password"
        onChange={onChangeHandler}
        value={formData.password}
      />

      <br />
      <br />
      <button className="btn">Submit</button>
    </form>
  );
};

export default Login;
