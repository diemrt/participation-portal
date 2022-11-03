import { useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function App()
{
  let [user, setUser] = useState({isNotSet: true});

  return user.isNotSet ? <LoginPage setUser={setUser}/> : <HomePage />;
}
