import React from "react";

function DematAccountBenefits() {
  return (
    <>
      <div className="container mt-5 p-5" style={{marginBlock:"5.3rem"}}>
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center ">
            <img
              src="/media/images/acop-benefits.svg"
              style={{ width: "100%", height: "35%" }}
              alt="ecosystem"
            />
             <div className="justify-content-center" style={{ height: "8rem" }}>
              <p className="text-center fs-3 mt-5 mb-5 ">
                Benefits of opening a Zerodha demat account
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="p-3">
          
              <h4 className="fs-4">Unbeatable pricing</h4>
              <p className="opacity-75">
                Zero charges for equity & mutual fund investments. Flat ₹20 fees
                for intraday and F&O trades.
              </p>
            </div>
            <div className="p-3">
              <h4>Best investing experience</h4>
              <p className="opacity-75">
                Simple and intuitive trading platform with an easy-to-understand
                user interface.
              </p>
            </div>
            <div className="p-3">
              <h4>No spam or gimmicks</h4>
              <p className="opacity-75">
                Committed to transparency — no gimmicks, spam, "gamification",
                or intrusive push notifications.
              </p>
            </div>
            <div className="p-3">
              <h4>The Zerodha universe</h4>
              <p className="opacity-75">
                With initiatives like Nudge and Kill Switch, we don't just
                <br></br> More than just an app — gain free access to the entire
                ecosystem of our partner products.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default DematAccountBenefits;
