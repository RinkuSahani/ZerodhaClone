import React from 'react';

import IntroPart from './IntroPart';
import SignUp from './SignUp';
import InvestmentOptions from './InvestmentOptions';
import DematAccount from "./DematAccount.js"
import DematAccountBenefits from './DematAccountBenefits.js';
import DifferentAccount from './DifferentAccounts.js';
import OpenAccount from "../OpenAccount.js";


 function SignupPage() {
    return ( 
    <>
    <IntroPart/>
    <SignUp/>
    <InvestmentOptions/>
    <DematAccount/>
    <DematAccountBenefits/>
    <DifferentAccount/>
    <OpenAccount/>
    </> 
    );
 }
 
 export default SignupPage;