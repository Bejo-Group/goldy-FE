import React from "react";
import DummyGraph from "../assets/DummyGraph.png"

function ToGraphLanding () {
    return(   
        <div>
            <div>
                <p className="font-bold text-h-xl text-center">Grafik Harga</p>
            </div>
            <div className="flex justify-center p-10">
                <img 
                className="scale-100" 
                src={DummyGraph} 
                alt="Dummy-Graph" 
                />
                <div className="px-4">
                    <p>Harga Terakhir</p>
                    <p>Rp1.049.000,00</p>
                    
                    <p>Perubahan</p>
                    <p>Rp0.00</p>

                    <p>Perubahan Terakhir</p>
                    <p>12 Maret 2023 06:46:21</p>
                </div>
            </div>
        </div>  
    )
}

export default ToGraphLanding