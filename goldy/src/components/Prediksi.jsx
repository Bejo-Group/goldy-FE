import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import DummyGraph from './ToGraphLanding'

function Prediksi(){
    return(
        <>
            <div className='flex flex-col h-screen'> 
                <Navbar/>
                <DummyGraph/>
                <Footer/>   
            </div>
        </>
    )
}

export default Prediksi