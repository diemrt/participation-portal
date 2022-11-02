import { useRouteError } from "react-router-dom";
import OutlinePrimaryLinkComponent from "../../components/ui/OutlinePrimaryLinkComponent";
import ContainerComponent from "../../components/ui/ContainerComponent";
import PrimaryHeader from "../../components/ui/PrimaryHeader";
import ErrorNavbarComponent from "./components/ui/ErrorNavbarComponent";


export default function ErrorFeature()
{
    const error = useRouteError();
    console.error(error);
    
    return (
        <ContainerComponent>
          <ErrorNavbarComponent>
            <img alt="logo" className="h-12 w-12 saturate-0 rotate-6" src="/svg/logo.svg" loading="lazy"></img>
          </ErrorNavbarComponent>
          <div className="flex flex-col items-center" id="error-page">
            <img alt="error" className="h-60" src="/images/error.png" loading="lazy"></img>
            <PrimaryHeader className="text-center">Oops!</PrimaryHeader>
            <p className="text-center">Qualcosa è andato storto</p>
            <OutlinePrimaryLinkComponent link="/" iconName="refresh" textDescription="Ricarica"></OutlinePrimaryLinkComponent>
          </div>
        </ContainerComponent>
      );
}