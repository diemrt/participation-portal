import { useState } from "react";
import { requeredField } from "../../data/validationErrors"

function triggerValidation(value, setLabel, setIsValid){
    if(typeof value === 'string' && value.length === 0){
        setLabel(requeredField);
    } else {
        setLabel("");
        setIsValid(true);
    }
}

function setValueWithValidation(value, setValue, setLabel, setIsValid)
{
    setValue(value);
    triggerValidation(value, setLabel, setIsValid);
}

export default function InputComponent({type, placeholder, setValue, setIsValid})
{
    let [label, setLabel] = useState();
    return (
        <label className="flex flex-col mb-5">
           <input type={type} className="h-16 rounded-2xl border-2 p-5" placeholder={placeholder} onChange={e => setValueWithValidation(e.target.value, setValue, setLabel, setIsValid)} onBlur={e => triggerValidation(e.target.value, setLabel, setIsValid)}/>           
           <small className="pl-1 mt-1 text-red-500">{label}</small>
        </label>
    );
}