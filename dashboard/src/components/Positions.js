import React from "react";
import { useState, useEffect } from "react";
import axios, { all } from "axios";



const Positions = () => {

  const [positions,setPositions]=useState([]);
  
  useEffect(()=>{
    axios.get("http://localhost:8000/allPositions").then((res)=>{
      setPositions(res.data);
    });
  },[]);
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
            {positions.map((stock, index) => {
                       const CurrentValue = stock.price * stock.qty;
                       const isProfit = CurrentValue - stock.avg * stock.qty >= 0;
                       const profitClass = isProfit ? "profit" : "loss";
                       const isLoss = stock.isLoss ? "loss" : "profit";
           
                       return (
                         <tr key={index}>
                          <td>{stock.product}</td>
                           <td>{stock.name}</td>
                           <td>{stock.qty}</td>
                           <td>{stock.avg.toFixed(2)}</td>
                           <td>{stock.price.toFixed(2)}</td>
                           <td>{CurrentValue.toFixed(2)}</td>
                           <td className={profitClass}>{(CurrentValue - stock.avg * stock.qty).toFixed(2)}</td>
                           <td className={profitClass}>{stock.net}</td>
                           <td className={isLoss}>{stock.day}</td>
                         </tr>
                       )
                     })}
           
        
        </table>
      </div>
    </>
  );
};

export default Positions;
