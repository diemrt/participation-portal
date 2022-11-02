import { useRouteError } from "react-router-dom";
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
          <ErrorNavbarComponent />
          <ErrorImageComponent path="/images/error.png"/>
          <div id="error-page">
            <PrimaryHeader className="text-center">Oops!</PrimaryHeader>
            <p className="text-center">Qualcosa è andato storto</p>
          </div>
        </ContainerComponent>
      );
}