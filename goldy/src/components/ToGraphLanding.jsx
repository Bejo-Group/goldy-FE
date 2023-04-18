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
                <div>
                    <p>Hellow World</p>
                    <p>Hellow World</p>
                    <p>Hellow World</p>
                    <p>Hellow World</p>
                </div>
            </div>
        </div>  
    )
}

export default ToGraphLanding