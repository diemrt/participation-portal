import { requeredField } from "../data/validationErrors";
import { firebaseSignIn } from "../../../services/FirebaseService";

export function inputValidation(value, setLabel){
    if(typeof value === 'string' && value.length === 0){
        setLabel(requeredField);
        return false;
    } else {
        setLabel("");
        return true;
    }
}

export function submitWithValitadion(event, email, setEmailLabel, password, setPasswordLabel, setUser, setError)
{
    let setUserLogged = (user) => setUser({email: user.email});
    let setErrorLabel = (message) => setError(`Errore di autenticazione: ${message}`);

    event.preventDefault();
    let validations = [];

    validations.push(inputValidation(email, setEmailLabel));
    validations.push(inputValidation(password, setPasswordLabel));
    for (const step of validations) {
        if(!step)
            return false
    }
    
    firebaseSignIn(email, password, setUserLogged, setErrorLabel);
}