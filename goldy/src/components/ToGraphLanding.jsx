import React, { useEffect, useState } from "react"
import DummyGraph from "../assets/DummyGraph.png";
import Chart from "./Chart";

function ToGraphLanding () {
    const [rates, setRates] = useState([])
    
    const fetchRatesData = () => {
        // fetch("https://jsonplaceholder.typicode.com/users")
        fetch("https://api.metalpriceapi.com/v1/timeframe?api_key=56035e3d3fd2136aa0515ead403a9012&start_date=2021-01-01&end_date=2021-05-01")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRates(data.rates)
          })
      }
    
      useEffect(() => {
        fetchRatesData()
      }, [])

      const filterData = () =>{
        const filteredRates = {};

    Object.entries(rates).forEach(([date, currencies]) => {
      const idrRate = currencies.IDR;
      if (idrRate) {
        filteredRates[date] = {
          IDR: idrRate
        };
      }
    });

    setRates(filteredRates);
      }
    return(   
        // <div>
        //     <div>
        //         <p className="font-bold text-h-xl text-center py-5">Grafik Harga</p>
        //     </div>
        //     <div className="flex justify-center p-10">
        //         <img 
        //         className="scale-100" 
        //         src={DummyGraph} 
        //         alt="Dummy-Graph" 
        //         />
        //         <div className="px-4">
        //             <div className="pb-2">
        //                 <p>Harga Terakhir</p>
        //                 <p className="text-gold text-h-md">Rp1.049.000,00</p>
        //             </div>
                    
        //             <div className="pb-2">
        //                 <p >Perubahan</p>
        //                 <p className="text-gold text-h-md">Rp0.00</p>
        //             </div>

        //             <p>Perubahan Terakhir</p>
        //             <p className="text-gold text-h-md">12 Maret 2023 06:46:21</p>
        //         </div>
        //     </div>
        // </div> 
        <div>
        {Object.entries(rates).length > 0 ? (
          <ul>
            {Object.entries(rates).map(([date, currencies]) => (
              <li key={date}>
                <p>{date}</p>
                <ul>
                  {Object.entries(currencies).map(([currency, value]) => (
                    <li key={currency}>
                      <p>{`${currency}: ${value}`}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading rates...</p>
        )}
      </div>
    )
}

export default ToGraphLanding