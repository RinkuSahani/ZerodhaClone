import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { VerticalChart } from "./VerticalChart";



const Holdings = () => {
  const [holdings,setHoldings]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/allHoldings").then((res)=>{
      setHoldings(res.data);
    })
  },[]);

const labels = holdings.map((stock)=>stock.name);

 const data = {
  labels,
  datasets: [
    {
      label: 'Stock price:',
      data:holdings.map((stock)=>stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
   
  ],
};

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {holdings.map((stock, index) => {
            const CurrentValue = stock.price * stock.qty;
            const isProfit = CurrentValue - stock.avg * stock.qty >= 0;
            const profitClass = isProfit ? "profit" : "loss";
            const isLoss = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
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

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalChart data={data}/>
    </>
  );
};

export default Holdings;
