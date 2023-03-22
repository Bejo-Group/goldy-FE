import React, {useState} from "react";

export default function PickDate(){
    const [date,setDate]=useState();
    console.log("Date",date);

    return(
        <div className=" flex flex-cols-1 w-1/3 flex space-x-1">
            <h1 className="text-sm font-primary font-bold">Tanggal : </h1>
            <input
                type="date" onChange={e=>setDate(e.target.value)}
                className="border border-lightgray bg-lightgray text-sm font-primary
                        focus:outline-none focus:border-darkgray"
            />
        </div>   
);
}