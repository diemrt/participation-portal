import ContainerComponent from "../../components/ui/ContainerComponent";
import NavbarComponent from "../../components/ui/NavbarComponent";
import PrimaryHeader from "../../components/ui/PrimaryHeader";

export default function LoginFeature(){

    return (
        <ContainerComponent>
            <NavbarComponent>
                <img alt="logo" className="h-12 w-12" src="/svg/logo.svg" loading="lazy"></img>
            </NavbarComponent>
            <PrimaryHeader>Bentornato! 😉</PrimaryHeader>
            <p>Accedi per entrare nel portale delle presenze.</p>
        </ContainerComponent>
    );
}