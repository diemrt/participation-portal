import { useState } from "react";
import { submitWithValitadion } from "../../services/loginService";
import InputComponent from "./InputComponent";

export default function LoginFormComponent({setUser})
{
    let [email, setEmail] = useState("");
    let [emailLabel, setEmailLabel] = useState("");

    let [password, setPassword] = useState("");
    let [passwordLabel, setPasswordLabel] = useState("");

    return (
        <form className="flex flex-col mt-20" onSubmit={e => submitWithValitadion(e, email, setEmailLabel, password, setPasswordLabel, setUser)}>
            <InputComponent type="email" placeholder="Email" label={emailLabel} setLabel={setEmailLabel} setValue={setEmail}/>
            <InputComponent type="password" placeholder="Password" label={passwordLabel} setLabel={setPasswordLabel} setValue={setPassword} />


            <button type="submit" className="rounded p-2 bg-slate-800 hover:bg-slate-900 text-white mt-10 mb:mt-5">Submit</button>
        </form>
    );
}