import { requeredField } from "../data/validationErrors";

function setUserService(email, password, setUser)
{
    setUser({
        email: email,
        password: password
    })
}

export function inputValidation(value, setLabel){
    if(typeof value === 'string' && value.length === 0){
        setLabel(requeredField);
        return false;
    } else {
        setLabel("");
        return true;
    }
}

export function submitWithValitadion(event, email, setEmailLabel, password, setPasswordLabel, setUser)
{
    event.preventDefault();
    let validations = [];

    validations.push(inputValidation(email, setEmailLabel));
    validations.push(inputValidation(password, setPasswordLabel));
    for (const step of validations) {
        if(!step)
            return false
    }
    
    setUserService(email, password, setUser);
}