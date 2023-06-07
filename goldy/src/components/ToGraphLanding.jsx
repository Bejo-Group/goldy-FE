import React from "react";
import DummyGraph from "../assets/DummyGraph.png"

function ToGraphLanding () {
    return(   
        <div>
            <div>
                <p className="font-bold text-h-xl text-center py-5">Grafik Harga</p>
            </div>
            <div className="flex justify-center p-10">
                <img 
                className="scale-100" 
                src={DummyGraph} 
                alt="Dummy-Graph" 
                />
                <div className="px-4">
                    <div className="pb-2">
                        <p>Harga Terakhir</p>
                        <p className="text-gold text-h-md">Rp1.049.000,00</p>
                    </div>
                    
                    <div className="pb-2">
                        <p >Perubahan</p>
                        <p className="text-gold text-h-md">Rp0.00</p>
                    </div>

                    <p>Perubahan Terakhir</p>
                    <p className="text-gold text-h-md">12 Maret 2023 06:46:21</p>
                </div>
            </div>
        </div>  
    )
}

export default ToGraphLanding