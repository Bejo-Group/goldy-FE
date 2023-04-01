import React from 'react'
import Rekomendasi from '../assets/Rekomendasi.png'

function ToRekomendasi() {
  return (
    <div className='grid grid-cols-2 flex justify-center items-center mx-36 my-10'>
        <div className='flex justify-center items-center'>
            <img
                className="h-[390px]"
                src={Rekomendasi}
                alt="Rekomendasi"
            />
        </div>        
        <div>
            <p className='font-bold text-h-xl'>Rekomendasi</p>
            <p className='text-h-md'>Rekomendasi waktu yang tepat untuk melakukan investasi</p>
            {/* BUTTON FARHAN */}
            <button>Coba di sini</button>
        </div>
    </div>
  )
}

export default ToRekomendasi