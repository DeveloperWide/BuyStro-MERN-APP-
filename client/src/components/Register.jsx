import { useState } from "react";
import { signup } from "../utils/authHelper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
    navigate("/");
  };

  return (
    <form className="p-2" onSubmit={onSubmitHandler}>
      <input
        type="name"
        name="name"
        placeholder="John Doe"
        className="name"
        onChange={onChangeHandler}
        value={formData.name}
      />

      <br />
      <br />

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

export default Register;
