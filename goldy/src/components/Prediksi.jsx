import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DummyGraph from './ToGraphLanding'
import { Link } from "react-router-dom";

import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';

function Prediksi(){
    const [SPX, setSPX] = useState(0);
    const[USO, setUSO]  = useState(0);
    const[SLV, setSLV] = useState(0);
    const[EUR_USD, setEUR_USD] = useState(0);
    const [prediction, setPrediction] = useState();
    const onSubmit = async () => {
        if (SPX === "" || USO === "" || SLV === "" || EUR_USD === "") {
            toast.error("All field must be filled!");
            console.log("All field must be filled!")
        } else {
            axios.get("http://127.0.0.1:5000/prediction", {
                params: {
                    SPX: SPX,
                    USO: USO,
                    SLV: SLV,
                    EUR_USD: EUR_USD,
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
                <div className="row flex">
                    <div className="column flex-[50%]">
                        <div className='pl-60'>
                            <div className='flex'>
                                <div className='text-secondary text-h-md pr-5'>Tanggal :</div>   
                                <input class="shadow appearance-none border rounded w-3/5 py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Masukkan tanggal kapan harga diprediksi ..."/>                                
                            </div>
                            <div>
                                <Link to="">
                                    <button className='text-white bg-black px-20 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'>Proses</button>
                                </Link>     
                            </div>
                        </div>
                    </div>
                    <div className="column flex-[50%] text-secondary text-h-md">
                        Output
                    </div>
                </div>
                <Footer/>   
            </div>
        </>
    )
}

export default Prediksi