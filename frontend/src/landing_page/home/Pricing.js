import React from 'react';

function Pricing() {
    return (
        <>
            <div className='container mt-5 p-5'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='p-3'>
                            <h3 className='mb-5'>Unbeatable Pricing</h3>
                            <p className='opacity-75'>We pioneered the concept of discount broking and price <br>
                            </br> transparency in India.Flat fees and no hidden charges.
                            </p>
                            <a href='#' class="text-decoration-none fs-5 opacity-75">See pricing  <i className="fa-solid fa-arrow-right fs-6"></i></a>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <div className='row text-center'>
                            <div className='border col-6 p-4'>
                                <h2 className='mb-4'>&#8377;0</h2>
                                <p className='mt-5'>Free equity delivery and direct mutual funds</p>
                            </div>
                            <div className='border col-6 p-4'>
                                <h2 className='mb-4'>&#8377;20</h2>
                                <p className='mt-5'>Intraday and F&O</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;