import React from "react";
import { Link } from "react-router-dom";

function DematAccount() {
  return (
    <>
      <div className="container container justify-content-center align-items-center mb-5 mt-5 ">
        <div className="justify-content-center" style={{ height: "8rem" }}>
          <p className="text-center fs-3 mt-5 mb-5 ">
            Steps to open a demat account with Zerodha
          </p>
        </div>
        <div
          className="row grid text-center justify-content-center align-items-center mx-auto  "
          style={{ width: "60rem" }}
        >
          <div className="col-lg-6 col-md-12">
            <img src="media/images/steps-acop.svg" alt="dematAccount" />
          </div>
          <div className="col-lg-6 col-md-12 ">
         
          <div className="acop-steps-container dematOptions border-bottom fs-5 mt-3">
            <div className="d-inline acop-steps text-center "><span >01</span></div>
            <p className="d-inline acop-steps-text">Enter the requested details</p>
          </div>
          <div className="acop-steps-container dematOptions border-bottom fs-5 mt-3">
            <div className="d-inline acop-steps text-center "><span >02</span></div>
            <p className="d-inline acop-steps-text">Complete e-sign &amp; verification</p>
          </div>
          <div className="acop-steps-container dematOptions fs-5 mt-3">
            <div className="d-inline acop-steps text-center "><span >03</span></div>
            <p className="d-inline acop-steps-text">Start investing!</p>
          </div>
        
          </div>
         
        </div>
      </div>
    </>
  );
}

export default DematAccount;
