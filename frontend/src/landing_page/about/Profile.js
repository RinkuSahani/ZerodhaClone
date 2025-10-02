import React from 'react';

function Profile() {
    return (
        <>
       <div className='container mt-3'>
        <h3 className='mb-5 text-center'>People</h3>
        <div className='row mx-auto justify-content-center  align-items-center'>
            <div className='col-lg-6 col-md-12 justify-content-center text-center align-items-center mt-5' >

                <img src='/media/images/Rinku.png.png' style={{width:"18rem"}} title='leader'/>
                <p className='fs-4'>Rinku Sahani</p>
                <p className='opacity-75'>Founder,CEO</p>
            </div>
            <div className='col-lg-6 col-md-12 justify-content-center align-items-center' >
                <p>Rinku bootstrapped and founded Zerodha in 2010 to overcome  the<br></br> hurdles he faced during his decade long stint as a trader. Today,<br></br> Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee <br></br>(SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href="#"style={{textDecoration:"none"}}>Homepage / TradingQnA / Twitter</a></p>
            </div>
        </div>
       </div>
        </>
     );
}

export default Profile;