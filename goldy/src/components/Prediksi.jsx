import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar'
import Footer from './Footer'
import DummyGraph from './ToGraphLanding'
import { Link } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';

function Prediksi(){
    const [StockMarket_SPX, setSPX] = useState(0);
    const[StockMarket_USO, setUSO]  = useState(0);
    const[StockMarket_SLV, setSLV] = useState(0);
    const[StockMarket_EUR_USD, setEUR_USD] = useState(0);
    const [prediction, setPrediction] = useState();
    const onSubmit = async () => {
        if (StockMarket_SPX === "" || StockMarket_USO === "" || StockMarket_SLV === "" || StockMarket_EUR_USD === "") {
            toast.error("All field must be filled!");
            console.log("All field must be filled!")
        } else {
            axios.get("http://127.0.0.1:5000/prediction", {
                params: {
                    SPX: StockMarket_SPX,
                    USO: StockMarket_USO,
                    SLV: StockMarket_SLV,
                    EUR_USD: StockMarket_EUR_USD,
                },
        })
        .then((response) => {
            if(response.status < 400) {
                toast.success("Prediction Success!");
                setPrediction(response.data.result)
            }
            console.log(response);
        }) 
        .catch((err) => {
            console.log(err.response);
        });
        }
    };

    return(
        <>
            <div className='flex flex-col h-screen'> 
                <Navbar/>
                <DummyGraph/>
                <ToastContainer/>
                <div className="row flex">
                    <div className="column flex-[50%]">
                        <div className='pl-60'>
                            {/* SPX Section */}
                            <div className='flex mt-10'>
                                <div className='text-secondary text-h-md pr-5'>SPX :</div>   
                                <input 
                                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Masukkan nilai SPX"
                                type="number"
                                required
                                value={StockMarket_SPX} 
                                onChange={(event) => setSPX(event.target.value)}
                                />                                
                            </div>

                            {/* USO Section */}
                            <div className='flex mt-10'>
                                <div className='text-secondary text-h-md pr-5'>USO :</div>   
                                <input 
                                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Masukkan nilai USO"
                                type="number"
                                required
                                value={StockMarket_USO}
                                onChange={(event) => setUSO(event.target.value)} 
                                />                                
                            </div>

                            {/* SLV Section */}
                            <div className='flex mt-10'>
                                <div className='text-secondary text-h-md pr-5'>SLV :</div>   
                                <input 
                                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Masukkan nilai SLV"
                                type="number"
                                required
                                value={StockMarket_SLV} 
                                onChange={(event) => setSLV(event.target.value)}
                                />                                
                            </div>

                            {/* EUS_USD Section */}
                            <div className='flex mt-10'>
                                <div className='text-secondary text-h-md pr-5'>EUR/USD :</div>   
                                <input 
                                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Masukkan nilai EUR/USD"
                                type="number"
                                required
                                value={StockMarket_EUR_USD}
                                onChange={(event) => setEUR_USD(event.target.value)} 
                                />                                
                            </div>

                            <div>
                                <Link to="">
                                    <button 
                                    className='text-white bg-black px-20 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'
                                    onClick={onSubmit}
                                    type='button'
                                    >
                                        Proses
                                    </button>
                                </Link>     
                            </div>
                        </div>
                    </div>
                    <div className="result column flex-[50%] text-secondary text-h-md">
                        <label>{prediction}</label>
                    </div>
                </div>

                <Footer/>   
            </div>
        </>
    )
}

export default Prediksi