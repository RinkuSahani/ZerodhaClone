import React from 'react';

function Education() {
    return (
        <>
            <div class="container mt-5 mb-5">
                <div className='row '>
                    <div className='col-lg-6 col-md-12'>
                        <img src='/media/images/education.svg' style={{ width: "70%" }} alt='Trophy' />
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='row'>
                            <h4 className='p-3'>Free and open market education</h4>
                        </div>
                        <div className='row mb-5'>

                            <div >
                                <p className='opacity-75'>Varsity,the largest online stock market education in the world<br></br> covering everything from the basics to advanced training.
                                </p>
                                <a href='#' class="text-decoration-none fs-5 opacity-75">Versity<i className="fa-solid fa-arrow-right fs-6"></i></a>
                            </div>

                        </div>
                        <div className='row mb-5'>

                            <div >
                                <p className='opacity-75'>Trading Q&A, the most active trading and investment community in <br></br>India for all your market related queries.
                                </p>
                                <a href='#' class="text-decoration-none fs-5 opacity-75">TradingQ&A<i className="fa-solid fa-arrow-right fs-6"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>);
}

export default Education;