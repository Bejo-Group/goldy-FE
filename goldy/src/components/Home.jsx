import React from 'react'
import DatePicker from './DatePicker'
import Footer from './Footer'
import JualBeli from './RadioButton'
import LoadingBar from './LoadingBar'
import Navbar from './Navbar'
import OutputHarga from './OutputHarga'

function Home () {
    return (
        <>
        <Navbar/>
        <div>
            <DatePicker/>
            <OutputHarga/>
            <JualBeli/>
            <LoadingBar/>
            <Footer/>
        </div>
        </>
    );
};

export default Home;