import React from 'react';

function Brokerage() {
    return (
        <>
            <div className='container ' style={{marginTop:"10rem"}}>
                <div className='row text-center mt-5 mx-5'>
                    <div className='col-lg-4 col-md-12'>
                        <img src='media/images/pricing-eq.svg' className="mb-3" alt='fundhouse' style={{ width: "16rem" }} />
                        <h3 className='mb-4'>Free equity delivery</h3>
                        <p className='opacity-75 px-4' >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <img src='media/images/other-trades.svg' className="mb-3" alt='fundhouse' style={{ width: "16rem" }} />
                         <h3 className='mb-4'>Intraday and F&O trades</h3>
                        <p className='opacity-75 px-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className='col-lg-4 col-md-12'>
                        <img src='media/images/pricing-eq.svg' className="mb-3" alt='fundhouse' style={{ width: "16rem" }} />
                         <h3 className='mb-4'>Free direct MF</h3>
                        <p className='opacity-75 px-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brokerage;