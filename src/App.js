import { useState } from "react";
import HomePage from "./pages/HomePage";
import AuthComponent from "./components/ui/AuthComponent"

export default function App()
{
  let [user, setUser] = useState(null);
  return (
     <AuthComponent user={user} setUser={setUser}>
      <HomePage />
     </AuthComponent>
  );
}
