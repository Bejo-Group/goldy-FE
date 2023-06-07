import React from 'react'
import DatePicker from './DatePicker'
import Footer from './Footer'
import JualBeli from './RadioButton'
import LoadingBar from './LoadingBar'
import Navbar from './Navbar'
import OutputHarga from './OutputHarga'
import Def from './Def'
import ToGraph from './ToGraphLanding'
import ToPrediksi from './ToPrediksi'
import ToRekomendasi from './ToRekomendasi'
import ToTips from './ToTips'

function Home () {
    return (
        <>
        <Navbar/>
        <div className='min-h-screen'>
            <Def/>
            <ToPrediksi/>
            <ToRekomendasi/>
            <ToTips/>
        </div>
        <Footer/>
        </>
    );
};

export default Home;