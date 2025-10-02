import React from "react";

import Hero from "./Hero";
import LeftPicture from "./LeftPicture";
import RightPicture from "./RightPicture";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftPicture title='Kite' paraText='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.' link1='Try demo' link2="Learn more" imageLink="media/images/kite.png" icon={<i className="fa-solid fa-arrow-right fs-6"></i>}/>
       <RightPicture Title='Console' paragraph='The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.' link1='Learn more'  imageURL="media/images/console.png" icon={<i className="fa-solid fa-arrow-right fs-6"></i>}/>
      <LeftPicture title='Coin' paraText='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.' link1='Coin' imageLink='media/images/coin.png ' icon={<i className="fa-solid fa-arrow-right fs-6"></i>}/>
        <RightPicture Title='Kite Connect API' paragraph='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.' imageURL='media/images/kiteconnect.png' icon={<i className="fa-solid fa-arrow-right fs-6"></i>}  link1='Kite Connect'/>
          <LeftPicture title='Varsity mobile' paraText='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.' imageLink="media/images/varsity.png" 
          />
      <Universe />
    </>
  )
  }
export default ProductPage;
