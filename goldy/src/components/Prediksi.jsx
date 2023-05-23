import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DummyGraph from './ToGraphLanding'
import { Link } from "react-router-dom";

function Prediksi(){
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