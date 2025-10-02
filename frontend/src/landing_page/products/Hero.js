import React from 'react';


function Hero() {
    return ( 
        <>
         <div className='container text-center border-bottom' style={{paddingBottom:"6rem",marginTop:"6rem"}}>
            <p className='fs-3 fw-semibold'>Zerodha Products</p>
            <p className='fs-5 opacity-75 mt-3'>Sleek, modern and intuitive trading platforms</p>
            <p>Check out for <a href='#' className='text-decoration-none '>investment offerings<i className="fa-solid fa-arrow-right ps-1" style={{fontSize:"0.7rem"}}></i></a></p>
         </div>
        </>
     );
}

export default Hero;