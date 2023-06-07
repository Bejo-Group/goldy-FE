import React from 'react'
import Hero from '../assets/HeroImage.jpg'

function Def() {
  return (
    <div className='grid grid-cols-2 flex justify-center items-center mx-10 h-screen'>
        <div className='flex justify-center items-center'>
            <img
                className="h-[444px]"
                src={Hero}
                alt="Hero"
            />
        </div>        
        <div>
            <h1 className='font-bold text-[96px]'>Goldy</h1>
            <h4 className='text-h-md'>Mendeteksi harga emas dan merekomendasikan pembelian di waktu yang diinginkan</h4>
        </div>
    </div>
  )
}

export default Def