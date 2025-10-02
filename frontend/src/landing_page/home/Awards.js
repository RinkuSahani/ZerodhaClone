import React from 'react';

function Awards() {
    return (  
        <>
        <div class="container mt-5 p-5">
            <div className='row '>
                <div className='col-lg-6 col-md-12'>
                    <img src='/media/images/largestBroker.svg' style={{width:"70%"}} alt='Trophy'/>
                </div>
                <div className='col-lg-6 col-md-12'>
                    <div className='row'>
                        <h1 className='mb-3'>Largest stock broker in India</h1>
                        <p className='mb-3'>2+ million Zerodha clients contribute over 15% of all retailer order volumes in India daily
                         by trading and investing in:</p>
                        <div className='col'>
                            <ul>
                                <li className='p-2'>Futures and Options</li>
                                <li className='p-2'>Commodity derivatives</li>
                                <li className='p-2'>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li className='p-2'>Stocks & IPOs</li>
                                <li className='p-2'>Direct mutual funds</li>
                                <li className='p-2'>Bonds and Govt.Securities </li>
                            </ul>
                        </div>
                        <img src='/media/images/pressLogos.png' alt='logos'/>
                    </div>
                   
                </div>
            </div>
        </div>
        </>
    );
}

export default Awards;