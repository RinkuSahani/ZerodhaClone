import React from 'react';

function AccountInfo() {
    return (
        <>
            <div className='container mb-5 '>

                <p className='fs-3 ' style={{marginTop:"7.5rem"}}>Charges for account opening</p>
                <table className='border m-auto mb-5 table' >
                    <tr className='border-bottom '>
                        <td>Type of account</td>
                        <td>Charges</td>
                    </tr>
                    <tr>
                        <td>Online account</td>
                        <td><button className='btn btn-success' type='none'>Free</button></td>
                    </tr>
                    <tr>
                        <td>Offline account</td>
                        <td><button className='btn btn-success'>Free</button></td>
                    </tr>
                    <tr>
                        <td>NRI account (offline only)</td>
                        <td>&#8377; 500</td>
                    </tr>
                    <tr>
                        <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                        <td>&#8377; 500</td>
                    </tr>
                </table>
            </div>
            <div className='container '>

                <p className='fs-3 ' style={{marginTop:"7.5rem"}}>Demat AMC (Annual Maintenance Charge)</p>
                <table className='border m-auto  table'>
                    <tr className='border-bottom '>
                        <td>Value of holdings</td>
                        <td>AMC</td>
                    </tr>
                    <tr>
                        <td>Up to ₹4 lakh</td>
                        <td><button className='btn btn-success' type='none'>Free</button></td>
                    </tr>
                    <tr>
                        <td>₹4 lakh - ₹10 lakh</td>
                        <td>₹ 100 per year, charged quarterly*</td>
                    </tr>
                    <tr>
                        <td>Above ₹10 lakh</td>
                        <td>₹ 300 per year, charged quarterly</td>
                    </tr>
                </table>
                <p  style={{fontSize:"0.8rem"}}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA).BSDA account holders cannot hold more than one demat account. To learn more about BSDA,<br></br> <a href='#' className='text-decoration-none'>click here</a> .</p>
            </div>
            <div className='container' style={{marginBottom:"8rem"}}>

                <p className='fs-3 ' style={{marginTop:"7.5rem"}}>Charges for optional value added services</p>
                <table className='border m-auto table '>
                    <tr className='border-bottom '>
                        <td>Service</td>
                        <td>Billing Frquency</td>
                        <td>Charges</td>
                    </tr>
                    <tr>
                        <td>Tickertape</td>
                        <td>Smallcase</td>
                        <td>Free: 0 | Pro: 249/2399</td>
                        
                    </tr>
                    <tr>
                        <td>Smallcase</td>
                        <td>Per transaction</td>
                        <td>Buy & Invest More: 100 | SIP: 10</td>
                    </tr>
                    <tr>
                        <td>Kite Connect</td>
                        <td>Monthlyt</td>
                        <td>Connect: 500 | Personal: Free</td>
                        
                    </tr>
                   
                </table>
            </div>

            
        </>
    );
}

export default AccountInfo;