import React from 'react';
import {Link} from "react-router-dom";

function Hero() {
    return ( 
        <>
        <div className='container text-center '>
            <div className='row mx-auto'>
                    <img src='/media/images/homeHero.png' className='mx-auto mb-5'  alt='Hero Image' style={{width:"55rem"}} />
                    <h1 className="mb-4">Invest in everything</h1>
                    <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, and more </p>
                   <Link to="/signup"><button className="mt-3 mb-5 btn btn-primary mx-auto fs-5 p-2 opacity-75" style={{width:"15rem"}}>Sign up for free</button></Link> 

            </div>
        </div>
        </>
     );
}

export default Hero;
