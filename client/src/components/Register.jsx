import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/signup", formData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('token' , res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
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
