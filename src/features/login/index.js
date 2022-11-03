import ContainerComponent from "../../components/ui/ContainerComponent";
import NavbarComponent from "../../components/ui/NavbarComponent";
import PrimaryHeaderComponent from "../../components/ui/PrimaryHeaderComponent";
import PrimaryParagraphComponent from "../../components/ui/PrimaryParagraphComponent";
import LoginFormComponent from "./components/form/FormComponent";

export default function LoginFeature({setUser}){

    return (
        <ContainerComponent>
            <NavbarComponent>
                <img alt="logo" className="h-12 w-12" src="/svg/logo.svg" loading="lazy"></img>
            </NavbarComponent>
            <div className="mt-8">
            <PrimaryHeaderComponent>Bentornato! 😉</PrimaryHeaderComponent>
            <PrimaryParagraphComponent>Accedi per entrare nel portale delle presenze.</PrimaryParagraphComponent>
            <LoginFormComponent setUser={setUser} />
            </div>
            
        </ContainerComponent>
    );
}