function DifferentAccount() {
  return (
    <>
      <div className="container p-5">
        <div className="justify-content-center" style={{ height: "4.5rem" }}>
          <p className="text-center fs-3  ">
            Explore different account types
          </p>
        </div>
        <div className="row p-3">
          <div className="col-md-4">
            <fieldset class="border p-3 " style={{ height: "12rem" }}>
              <legend class="float-none w-auto px-2">
                <i class="fa-solid fa-user"></i>
              </legend>
              <p style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
                Individual Account
              </p>
              <p style={{ fontSize: "1.1rem" }} className="opacity-75">
                Invest in equity, mutual funds and<br></br> derivatives
              </p>
            </fieldset>
          </div>
          <div className="col-md-4">
            <fieldset class="border p-3 " style={{ height: "12rem" }}>
              <legend class="float-none w-auto px-2">
                <i class="fa-solid fa-people-roof"></i>
              </legend>
              <p style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
                HUF Account
              </p>
              <p style={{ fontSize: "1.1rem" }} className="opacity-75">
                Make tax-efficient investments for your family
              </p>
            </fieldset>
          </div>
          <div className="col-md-4">
            <fieldset class="border p-3 " style={{ height: "12rem" }}>
              <legend class="float-none w-auto px-2">
                <i class="fa-solid fa-globe"></i>
              </legend>
              <p style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
                NRI Account
              </p>
              <p style={{ fontSize: "1.1rem" }} className="opacity-75">
                Invest in equity, mutual funds, debentures, and more
              </p>
            </fieldset>
          </div>
        </div>
        <div className="row p-3">
          <div className="col-md-4">
            <fieldset class="border p-3 " style={{ height: "12rem" }}>
              <legend class="float-none w-auto px-2">
                <i class="fa-solid fa-child"></i>
              </legend>
              <p style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
                Minor Account
              </p>
              <p style={{ fontSize: "1.1rem" }} className="opacity-75">
                Teach your little ones about money & invest for their future
                with them
              </p>
            </fieldset>
          </div>
          <div className="col-md-4">
            <fieldset class="border p-3 " style={{ height: "12rem" }}>
              <legend class="float-none w-auto px-2">
                <i class="fa-solid fa-building"></i>
              </legend>
              <p style={{ fontSize: "1.3rem", fontWeight: "normal" }}>
                Corporate / LLP/ Partnership
              </p>
              <p style={{ fontSize: "1.1rem" }} className="opacity-75">
                Manage your business surplus and investments easily
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default DifferentAccount;
