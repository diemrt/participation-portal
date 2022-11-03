import { useRouteError } from "react-router-dom";
import OutlinePrimaryLinkComponent from "../../components/ui/OutlinePrimaryLinkComponent";
import ContainerComponent from "../../components/ui/ContainerComponent";
import PrimaryHeaderComponent from "../../components/ui/PrimaryHeaderComponent";
import NavbarComponent from "../../components/ui/NavbarComponent";


export default function ErrorFeature()
{
    const error = useRouteError();
    console.error(error);
    
    return (
        <ContainerComponent>
          <NavbarComponent>
            <img alt="logo" className="h-12 w-12 saturate-0 rotate-6" src="/svg/logo.svg" loading="lazy"></img>
          </NavbarComponent>
          <div className="flex flex-col items-center" id="error-page">
            <img alt="error" className="h-60" src="/images/error.png" loading="lazy"></img>
            <PrimaryHeaderComponent className="text-center">Oops!</PrimaryHeaderComponent>
            <p className="text-center">Qualcosa è andato storto</p>
            <OutlinePrimaryLinkComponent link="/" iconName="refresh" textDescription="Ricarica"></OutlinePrimaryLinkComponent>
          </div>
        </ContainerComponent>
      );
}