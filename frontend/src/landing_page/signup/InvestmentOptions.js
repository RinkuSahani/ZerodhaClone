import React from "react";
import {Link} from "react-router-dom";

function InvestmentOptions() {
  return (
    <>
      <div className="container container justify-content-center align-items-center ">
        <div className="justify-content-center" style={{ height: "8rem" }}>
        
          <p className="text-center fs-3 mt-5 mb-5 ">
            Investment options with Zerodha demat account
          </p>
        </div>
        <div
          className="row grid text-center justify-content-center align-items-center mx-auto  "
          style={{ width: "60rem" }}
        >
          <div className="col-lg-6 col-md-12">
            <div className="row mb-4">
              <div className="col-4">
                <img src="/media/images/stocks-acop.svg" alt="stocks" />
              </div>

              <div
                className="col-8 text-start mb-3 "
                style={{ paddingRight: "3rem" }}
              >
                <p className="fs-4 lh-1">Stocks</p>
                <p className="opacity-75">
                  Invest in all exchange-listed securities
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-4">
                <img src="/media/images/mf-acop.svg" alt="stocks" />
              </div>

              <div
                className="col-8 text-start mb-3 "
                style={{ paddingRight: "3rem" }}
              >
                <p className="fs-4 lh-1">Mutual funds</p>
                <p className="opacity-75">
                  Invest in commission-free direct mutual funds
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 ">
            <div className="row mb-4">
              <div className="col-4">
                <img src="/media/images/ipo-acop.svg" alt="stocks" />
              </div>

              <div
                className="col-8 text-start mb-3 "
                style={{ paddingRight: "3rem" }}
              >
                <p className="fs-4 lh-1">IPO</p>
                <p className="opacity-75">
                  Apply to the latest IPOs instantly via UPI
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src="/media/images/fo-acop.svg" alt="stocks" />
              </div>

              <div
                className="col-8 text-start mb-3 "
                style={{ paddingRight: "3rem" }}
              >
                <p className="fs-4 lh-1">Futures & options</p>
                <p className="opacity-75">
                  Hedge and mitigate market risk through simplified F&O trading
                </p>
              </div>
            </div>
          </div>
        <Link to="/signup">
          <button
            className=" mb-5 btn btn-primary mx-auto fs-5 p-2 opacity-75"
            style={{ width: "15rem",marginTop:"4rem" }}
          >
            Explore investments
          </button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default InvestmentOptions;
