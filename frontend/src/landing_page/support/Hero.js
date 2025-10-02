import React from "react";

function Hero() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#E8E8E8",height:"14rem" }}>
        <div className=" supportPortal">
          <span>
            <h2 className="d-inline">Support Portal</h2>
          </span>

          <span>
            <button type="button" className="btn btn-primary">
              My tickets
            </button>
          </span>
        </div>

        <div class="input-group">
          
          
            <button type="button" className="btn btn-primary">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>

          <input
            type="text"
            class="form-control"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            aria-label="Search"
            id="searchSupport"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
