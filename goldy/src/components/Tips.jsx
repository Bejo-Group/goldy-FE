import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import IconTag from '../assets/IconTag.png'
import IconLaptop from '../assets/IconLaptop.png'
import IconUang from '../assets/IconUang.png'
import IconCelengan from '../assets/IconCelengan.png'

function Tips(){
    return(
        <>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 flex justify-center items-center mx-28 mt-10 md: flex-row md: justify-between'>
                <h1 className='font-primary font-bold text-h-lg text-center '>Tips Investasi Emas</h1>
                <p className='font-secondary text-center mt-3' >Emas tidak hanya populer sebagai perhiasan tapi juga dianggap sebagai pilihan investasi yang menguntungkan. Mengapa demikian? Sebab emas merupakan barang yang harganya cenderung naik serta jarang mengalami penurunan dalam jumlah yang signifikan. Berikut cara investasi emas yang aman.</p>
            </div>
            <div className='flex justify-center items-center my-8 mx-28 grid lg:grid-cols-4 sm:grid-cols-1'>
                {/* Tips no.1 */}
                <div className='grid flex justify-center items-center'>
                    <img className="flex items-center h-[100px] w-[100px] my-4 mx-3" src={IconTag} alt="Tag"></img>
                    <p className= "font-secondary text-center mt-1">Tetapkan Tujuan</p>
                    <p className='font-secondary text-center'>Investasi</p>
                </div>
                {/* Tips no.2 */}
                <div className='grid flex justify-center items-center'>
                    <img className="h-[100px] w-[100px] my-4 mx-8" src={IconLaptop} alt="Laptop"></img>
                    <p className= "font-secondary text-center mt-1">Pantau Harga Emas</p>
                    <p className='font-secondary text-center'>Secara Berkala</p>
                </div>
                {/* Tips no.3 */}
                <div className='grid flex items-center justify-center'>
                    <img className="flex h-[100px] w-[100px] my-4 mx-7" src={IconUang} alt="Uang"></img>
                    <p className= "font-secondary text-center mt-1">Beli Emas di Tempat</p>
                    <p className='font-secondary text-center'>Terpercaya</p>
                </div>
                {/* Tips no.4 */}
                <div className='grid flex items-center justify-center'>
                    <img className="h-[100px] w-[100px] my-4 mx-6" src={IconCelengan} alt="Celengan"></img>
                    <p className= "font-secondary text-center mt-1">Simpan di Tempat</p>
                    <p className='font-secondary text-center'>Aman</p>
                </div>
            </div>
           <Footer></Footer>
        </>
    );
};

export default Tips;