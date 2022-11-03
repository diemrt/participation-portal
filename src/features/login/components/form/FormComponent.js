import { useState } from "react";
import { setUserService } from "../../services/loginService";
import InputComponent from "./InputComponent";

export default function LoginFormComponent({setUser})
{
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [isValid, setIsValid] = useState(false);
    let handleSubmit = (e) => {
        e.preventDefault();
        if(isValid)
            setUserService(email, password, setUser);
    }

    return (
        <form className="flex flex-col mt-20" onSubmit={handleSubmit}>
            <InputComponent type="email" placeholder="Email" setValue={setEmail} setIsValid={setIsValid}/>
            <InputComponent type="password" placeholder="Password" setValue={setPassword} setIsValid={setIsValid} />


            <button type="submit" className="rounded p-2 bg-slate-800 hover:bg-slate-900 text-white mt-10 mb:mt-5">Submit</button>
        </form>
    );
}