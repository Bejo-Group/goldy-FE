import React from 'react'
import { Link } from "react-router-dom";
import Prediksi from '../assets/Prediksi.png'

function ToPrediksi() {
  return (
    <div className='grid grid-cols-2 flex justify-center items-center mx-36 my-10'>
        <div className='flex justify-center items-center'>
            <img
                className="h-[390px]"
                src={Prediksi}
                alt="Prediksi"
            />
        </div>      
        <div>
            <p className='font-bold text-h-xl'>Prediksi</p>
            <p className='text-h-md'>Lakukan prediksi harga emas di waktu yang diinginkan.</p>
            <Link to="/prediksi">
              <button className='text-white bg-black px-5 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'>Coba di sini</button>
            </Link>
        </div>
    </div>
  )
}

export default ToPrediksi