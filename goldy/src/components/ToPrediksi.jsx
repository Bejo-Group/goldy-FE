import React from 'react'
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
            {/* BUTTON FARHAN */}
            <button>Coba di sini</button>
        </div>
    </div>
  )
}

export default ToPrediksi