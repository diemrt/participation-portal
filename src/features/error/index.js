import { useRouteError } from "react-router-dom";
import OutlinePrimaryLinkComponent from "../../components/ui/OutlinePrimaryLinkComponent";
import ContainerComponent from "../../components/ui/ContainerComponent";
import PrimaryHeader from "../../components/ui/PrimaryHeader";
import ErrorImageComponent from "./components/ui/ErrorImageComponent";
import ErrorNavbarComponent from "./components/ui/ErrorNavbarComponent";


export default function ErrorFeature()
{
    const error = useRouteError();
    console.error(error);
    
    return (
        <ContainerComponent>
          <ErrorNavbarComponent>
            <img alt="logo" className="h-12 w-12 saturate-0 rotate-6" src="/images/logo.png" loading="lazy"></img>
          </ErrorNavbarComponent>
          <ErrorImageComponent path="/images/error.png"/>
          <div className="flex flex-col items-center" id="error-page">
            <PrimaryHeader className="text-center">Oops!</PrimaryHeader>
            <p className="text-center">Qualcosa è andato storto</p>
            <OutlinePrimaryLinkComponent link="/" iconName="refresh" textDescription="Ricarica"></OutlinePrimaryLinkComponent>
          </div>
        </ContainerComponent>
      );
}