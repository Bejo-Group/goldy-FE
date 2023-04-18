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
            <button className='text-white bg-black px-5 py-1 mt-6 justify-center rounded-2xl hover:bg-darkgray hover:text-lightgray'>Coba di sini</button>
        </div>
    </div>
  )
}

export default ToRekomendasi