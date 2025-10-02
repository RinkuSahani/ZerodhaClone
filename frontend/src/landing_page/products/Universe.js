import React from 'react';

function Universe() {
    return ( 
    <>
    <div className='container '>
        <div  className='row text-center'>
            <p className='fs-4 mb-5'>Want to know more about out technology stack? Check out the <a href='#' className='text-decoration-none'>Zerodha.tech</a> blog</p>
            <h3 className='mt-5'>The Zerodha Universe</h3>
            <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className='row text-center mt-5 mx-5'>
            <div className='col-lg-4 col-md-12'>
            <img  src='media/images/zerodhaFundhouse.png' className="mb-3" alt='fundhouse' style={{width:"14rem"}} />
            <p className='opacity-75' style={{fontSize:"0.85rem"}}>Our asset management venture <br></br>that is creating simple and transparent index <br></br>funds to help you save for your goals.</p>
            </div>
            <div className='col-lg-4 col-md-12'>
            <img src='media/images/sensibullLogo.svg' className="mb-4" alt='fundhouse' style={{width:"14rem"}} />
            <p className='opacity-75 mt-3' style={{fontSize:"0.85rem"}}>Options trading platform that lets you <br></br>create strategies, analyze positions, and examine <br></br>data points like open interest, FII/DII, and more.</p>
            </div>
            <div className='col-lg-4 col-md-12'>
            <img src='media/images/tijori.svg' className="mb-3" alt='fundhouse' style={{width:"10rem"}} />
            <p className='opacity-75' style={{fontSize:"0.85rem"}}>Investment research platform <br></br>that offers detailed insights on stocks, <br></br>sectors, supply chains, and more.</p>
            </div>
        </div>
        <div className='row text-center mt-5 mx-5'>
            <div className='col-lg-4 col-md-12'>
            <img  src='media/images/streakLogo.png' className="mb-3" alt='fundhouse' style={{width:"14rem"}} />
            <p className='opacity-75' style={{fontSize:"0.85rem"}}>Our asset management venture <br></br>that is creating simple and transparent index <br></br>funds to help you save for your goals.</p>
            </div>
            <div className='col-lg-4 col-md-12'>
            <img src='media/images/smallcaseLogo.png' className="mb-4" alt='fundhouse' style={{width:"14rem"}} />
            <p className='opacity-75 mt-2' style={{fontSize:"0.85rem"}}>Options trading platform that lets you <br></br>create strategies, analyze positions, and examine <br></br>data points like open interest, FII/DII, and more.</p>
            </div>
            <div className='col-lg-4 col-md-12'>
            <img src='media/images/dittoLogo.png' className="mb-3" alt='fundhouse' style={{width:"9rem"}} />
            <p className='opacity-75 mt-3' style={{fontSize:"0.85rem"}}>Investment research platform <br></br>that offers detailed insights on stocks, <br></br>sectors, supply chains, and more.</p>
            </div>
        </div>
        <div className='row mb-5'>
         <button className="mt-5 mb-5 btn btn-primary mx-auto fs-5 p-2 opacity-75 " style={{width:"13rem"}}>Sign up for free</button>
        </div>
        
    </div>
    </> );
}

export default Universe;