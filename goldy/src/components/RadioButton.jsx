import React from "react";
import { Radio } from "@material-tailwind/react";

export default function RadioButton(){
    return(
        <div className="flex gap-10">
            <Radio id="jual" name="type" label="Jual" />
            <Radio id="beli" name="type" label="Beli" defaultChecked />
        </div>  
);
}