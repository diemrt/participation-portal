import LoginPage from "../../pages/LoginPage";

export default function AuthComponent({user, setUser, children}){

    return user !== null ? children : <LoginPage setUser={setUser} />

}