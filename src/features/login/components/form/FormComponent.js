import { useState } from "react";
import { submitWithValitadion } from "../../services/loginService";
import InputComponent from "./InputComponent";

export default function LoginFormComponent({setUser})
{
    let [error, setError] = useState("");

    let [email, setEmail] = useState("");
    let [emailLabel, setEmailLabel] = useState("");

    let [password, setPassword] = useState("");
    let [passwordLabel, setPasswordLabel] = useState("");

    return (
        <form className="flex flex-col items-center mt-20" onSubmit={e => submitWithValitadion(e, email, setEmailLabel, password, setPasswordLabel, setUser, setError)}>
            <small className="text-red-500 mb-5 font-bold w-full text-left">{error}</small>
            <InputComponent type="email" placeholder="Email" label={emailLabel} setLabel={setEmailLabel} setValue={setEmail}/>
            <InputComponent type="password" placeholder="Password" label={passwordLabel} setLabel={setPasswordLabel} setValue={setPassword} />

            <button type="submit" className="mt-12 flex flex-row justify-center content-center text-white bg-orange-500 w-40 rounded-lg p-3 font-medium hover:text-orange-100">
                <span className="material-symbols-outlined pr-2">
                    login
                </span>
                Accedi
            </button>
        </form>
    );
}