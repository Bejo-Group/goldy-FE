import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DummyGraph from './ToGraphLanding'

function Rekomendasi(){
    return(
        <>
            <div className='flex flex-col h-screen'>
                <Navbar/>
                <DummyGraph/>
                <div className='flex'>
                    <div>kiri</div>
                    <div>kanan</div>
                </div>
                <Footer/>   
            </div>
        </>
    )
}

export default Rekomendasi