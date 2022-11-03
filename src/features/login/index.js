import ContainerComponent from "../../components/ui/ContainerComponent";
import NavbarComponent from "../../components/ui/NavbarComponent";

export default function LoginFeature(){

    return (
        <ContainerComponent>
            <NavbarComponent>
                <img alt="logo" className="h-12 w-12" src="/svg/logo.svg" loading="lazy"></img>
            </NavbarComponent>
            login page
        </ContainerComponent>
    );
}