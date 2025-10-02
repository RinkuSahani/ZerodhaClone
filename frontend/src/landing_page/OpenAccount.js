import React from 'react';
import {Link} from "react-router-dom";

function OpenAccount() {
    return (
        <>
            <div className='container text-center mt-5'>
                <div className='row'>
                    <h2 className="mb-4">Open a Zerodha account</h2>
                    <p className='opacity-75'>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                    <Link to="/signup"><button className="mt-3 mb-5 btn btn-primary mx-auto fs-5 p-2 opacity-75" style={{ width: "15rem" }}>SignUp Now</button></Link>

                </div>
            </div>
        </>
    );
}

export default OpenAccount;