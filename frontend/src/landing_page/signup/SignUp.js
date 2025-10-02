import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://zerodhaclone-9cf2.onrender.com/signup", formData);
      window.location.href = "https://zerodhaclone-dashboard-ieem.onrender.com";
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Try again.");
    }
  };

  return (
    <>
      <div className="container justify-content-center align-items-center ">
        <div className="row grid text-center justify-content-center align-items-center mx-auto mb-5" style={{width:"70rem"}}>

          <div className="col-lg-6 col-md-12 mt-4  ">
            <img
              src="/media/images/account_open.svg"
              alt="account_open"
            />
        
          </div>

          <div className=" col-lg-6 col-md-12 ">
            <div style={{marginLeft:"5rem"}} className="d-flex justify-content-center align-items-center mt-5 ">
              <div
                className="card p-4 shadow-sm"
                style={{ width: "350px",}}
              >
                
                <h3 className="text-center mb-3">Signup</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

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

                  <button type="submit" className="btn btn-primary w-100">
                    Sign Up
                  </button>
                </form>

                {/* 👇 Login option if user already has an account */}
                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
