import React from 'react';

function Stats() {
    return ( 
        <>
         <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-lg-6 col-md-12'>
                    <div className='p-3'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='opacity-75'>That's why 1.3+ crore customers trust Zerodha with 3.5+ <br></br> lakh crores worth of equity investments.</p>
                    </div>
                    <div className='p-3'>
                    <h4>No spam or gimmicks</h4>
                    <p className='opacity-75'>No gimmicks, spam, "gamification", or annoying push <br></br>notifications.High quality apps that you use at your pace,<br></br>
                     the way you like.</p>
                    </div>
                    <div className='p-3'>
                    <h4>The Zerodha Universe</h4>
                    <p className='opacity-75'>Not just an app, but a whole ecosystem.Our investment in<br></br> 30+ fintech startups offer you tailored services specific to
                    <br></br> your needs.</p>
                    </div>
                    <div className='p-3'>
                    <h4>Do better with money</h4>
                    <p className='opacity-75'>With initiatives like Nudge and Kill Switch, we don't just 
                    <br></br> facilitate transactions,but actively help you do better with
                    <br></br> your money.</p>
                    </div>
                    
                </div>
                <div className='col-lg-6 col-md-12'>
                    <img src='/media/images/ecosystem.png' style={{width:"100%",height:"90%"}} alt='ecosystem'/>
                    <div className='row px-5 ml-5'>
                        <div className='col-6'>
                            <a href='#' class="text-decoration-none fs-5 opacity-75">Explore out products <i className="fa-solid fa-arrow-right fs-6"></i></a>
                        </div>
                        <div className='col-6'>
                            <a href='#' class="text-decoration-none mx-5 fs-5 opacity-75">Try Kite <i className="fa-solid fa-arrow-right fs-6"></i></a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </>
     );
}

export default Stats;