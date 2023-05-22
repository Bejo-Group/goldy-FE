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
                        <div>Tanggal</div>
                        <div>
                            <Link to="/">
                                <button className='text-white bg-black px-20 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'>Proses</button>
                            </Link>     
                        </div>
                    </div>
                    <div className="column flex-[50%]">2</div>
                </div>
                <Footer/>   
            </div>
        </>
    )
}

export default Prediksi