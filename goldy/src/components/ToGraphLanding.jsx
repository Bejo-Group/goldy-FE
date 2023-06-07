import React from "react";
import DummyGraph from "../assets/DummyGraph.png";
import Chart from "./Chart";

function ToGraphLanding () {
    return(   
        <div>
            <div>
                <p className="font-bold text-h-xl text-center py-5">Grafik Harga</p>
            </div>
            <div className="flex justify-center w-screen">
                <Chart/>
            </div>
        </div> 
    )
}

export default ToGraphLanding