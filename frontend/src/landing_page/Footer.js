import React from 'react';

function Footer() {
    return (
        <>
        <div className='border-top'>
            <div className='container mx-auto ' >
                <div className='row p-5'>
                    <div className='col-lg-4 col-md-12 mb-3'>
                       <img src='/media/images/logo.svg' style={{ width: "10rem",marginBottom:"1rem",marginTop:"0.8rem" }} alt='Zerodha logo' />
                       <p style={{margin:"0 0 0 0",fontSize:"0.9rem"}} className='opacity-75'>© 2010 - 2025, Zerodha Broking Ltd.</p>
                       <p style={{margin:"0 0 0 0",fontSize:"0.9rem"}} className='opacity-75'>All rights reserved.</p>
                    </div>
                    <div className='col-lg-2 col-md-12 opacity-75'>
                        <p className='fs-5 text-black'>Account</p>
                        <p>Open demat account</p>
                        <p>Minor demat account</p>
                        <p>NRI demat account</p>
                        <p>Commodity</p>
                        <p>Dematerialisation</p>
                        <p>Fund transfer</p>
                        <p>MTF</p>
                        <p>Referral program</p>
                    </div>
                    <div className='col-lg-2 col-md-12 opacity-75 flex-start'>
                        <p className='fs-5 text-black'>Support</p>
                        <p>Contact us</p>
                        <p>Support portal</p>
                        <p>How to file a complaint?</p>
                        <p>Status of your complaints</p>
                        <p>Bulletin</p>
                        <p>Circular</p>
                        <p>Z-Connect blog</p>
                        <p>Downloads</p>
                    </div>
                    <div className='col-lg-2 col-md-12 opacity-75'>
                        <p className='fs-5 text-black'>Company</p>
                        <p>About</p>
                        <p>Philosophy</p>
                        <p>Press & media</p>
                        <p>Careers</p>
                        <p>Zerodha Cares (CSR)</p>
                        <p>Zerodha.tech</p>
                        <p>Open source</p>
                    </div>
                    <div className='col-lg-2 col-md-12 opacity-75'>
                        <p className='fs-5 text-black'>Quick links</p>
                        <p>Upcoming IPOs</p>
                        <p>Brokerage charges</p>
                        <p>Market holidays</p>
                        <p>Economic calendar</p>
                        <p>Calculators</p>
                        <p>Markets</p>
                        <p>Sectors</p>
                    </div>
                </div>
                <div className='row opacity-75  p-5 ' style={{ fontSize: "0.7rem" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
                        Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
                        Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha
                        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
                        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
                        any complaints pertaining to securities broking please write to
                        <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>, for
                        DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>. Please
                        ensure you carefully read the Risk Disclosure Document as prescribed by
                        SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on <a rel="nofollow" href="https://scores.sebi.gov.in/" target="_blank">SEBI SCORES</a>:
                        Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number,
                        E-mail ID.
                        Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        <a rel="nofollow" href="https://smartodr.in/" target="_blank">Smart Online Dispute Resolution</a> | <a href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf" target="_blank">Grievances Redressal Mechanism</a>
                    </p>

                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                    </p>
                    <p>
                        India's largest broker based on networth as per NSE. <a rel="nofollow" href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&amp;h_MemType=members&amp;memName=ZERODHA%20BROKING%20LIMITED" target="_blank">NSE broker factsheet</a>
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile
                        numbers/email IDs with your stock brokers. Receive information of your
                        transactions directly from Exchange on your mobile/email at the end of
                        the day. Issued in the interest of investors. KYC is one time exercise
                        while dealing in securities markets - once KYC is done through a SEBI
                        registered intermediary (broker, DP, Mutual Fund etc.), you need not
                        undergo the same process again when you approach another intermediary."
                        Dear Investor, if you are subscribing to an IPO, there is no need to
                        issue a cheque. Please write the Bank account number and sign the IPO
                        application form to authorize your bank to make payment in case of
                        allotment. In case of non allotment the funds will remain in your bank
                        account. As a business we don't give stock tips, and have not authorized
                        anyone to trade on behalf of others. If you find anyone claiming to be
                        part of Zerodha and offering such services, please
                        <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha">create
                            a ticket here</a>.
                    </p>
                </div>

         
            </div>
            </div>
        </>
    );
}

export default Footer;