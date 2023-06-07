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
    const [input_Date, setDate] = useState(new Date());
    const [prediction, setPrediction] = useState();

    const onSubmit = async () => {
        if (input_Date === "") {
            toast.error("All field must be filled!");
            console.log("All field must be filled!")
        } else {
            axios.get("http://127.0.0.1:5000/prediction", {
                params: {
                    date: input_Date,
                },
        })
        .then((response) => {
            if(response.status < 400) {
                toast.success("Prediction Success!");
                setPrediction(response.data.predicted_price)
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
            <Navbar/>
            <div className='flex flex-col min-h-screen'>                 
                <DummyGraph/>
                <ToastContainer/>
                <div className="row flex py-10">
                    <div className="column flex-[50%]">
                        <div className='pl-60'>
                            {/* Date Section */}
                            <div className='flex mt-10'>
                                <div className='text-secondary text-h-md pr-5'>Date :</div>   
                                <input 
                                className="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" 
                                placeholder="Masukkan Tanggal"
                                type="date"
                                required
                                value={input_Date} 
                                onChange={(event) => setDate(event.target.value)}
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
            </div>
            <Footer/> 
        </>
    )
}

export default Prediksi