import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  alert("Login successful!");
  navigate("/");
};

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-icon">🍽️</div>

        <PageTitle
  title="Welcome Back"
  subtitle="Login to continue to RestaurantHub"
/>

        

        <form onSubmit={handleLogin}>
          <div className="login-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="login-submit">
  Login
</Button>
        </form>

        <p className="login-footer">
           Don't have an account?{" "}
          <span
          onClick={() => navigate("/signup")}
          style={{ cursor: "pointer" }}
      >
        Sign Up
  </span>
</p>
      </div>
    </div>
  );
}

export default Login;