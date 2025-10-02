import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://zerodhaclone-9cf2.onrender.com/login", formData);
      console.log(res.data);
      window.location.href = "https://zerodhaclone-dashboard-ieem.onrender.com";
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <img
            src="/media/images/account_open.svg"
            alt="account_open"
            style={{ width: "90%", marginLeft: "8rem" }}
          />
        </div>
        <div className="col-lg-6 col-md-12 px-5">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <div
              className="card p-4 shadow-sm"
              style={{ width: "350px", marginRight: "5rem" }}
            >
              <h3 className="text-center mb-3">Login</h3>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <p className="text-center mt-3">
                Don’t have an account?{" "}
                <a href="/signup" className="text-decoration-none">
                  Signup
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
