import { Link } from "react-router";

export const truncateText = (text, limit) => {
  if (!text) return "";
  return text.length > limit ? text.substring(0, limit) + "..." : text;
};

export const getTitle = (location) => {
  if (location.pathname === "/login") return "Welcome Back";
  if (location.pathname === "/register") return "Create Your Account";
  return "Signup or Login";
};

export const getRedirectionMsg = (location) => {
  if (location.pathname === "/login") {
    return (
      <p>
        Don't Have an Account? <Link to={"/register"}>Signup</Link>
      </p>
    );
  }
  if (location.pathname === "/register") {
    return (
      <p>
        Already Have an Account? <Link to={"/login"}>Login</Link>
      </p>
    );
  }
};

export const active = (path, location) => location.pathname === path;
