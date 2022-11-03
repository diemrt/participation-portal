import { inputValidation } from "../../services/loginService";

function setValueWithValidation(value, setValue, setLabel)
{
    setValue(value);
    inputValidation(value, setLabel);
}

export default function InputComponent({type, placeholder, label, setLabel, setValue})
{
    return (
        <label className="flex flex-col mb-5">
           <input type={type} className="h-16 rounded-2xl border-2 p-5" placeholder={placeholder} onChange={e => setValueWithValidation(e.target.value, setValue, setLabel)} onBlur={e => inputValidation(e.target.value, setLabel)}/>           
           <small className="pl-1 mt-1 text-red-500">{label}</small>
        </label>
    );
}