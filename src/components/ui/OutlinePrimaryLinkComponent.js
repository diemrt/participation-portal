import { Link } from "react-router-dom";

export default function OutlinePrimaryLinkComponent(props)
{

    return (
        <Link to={props.link} className="flex flex-row justify-center content-center text-orange-500 w-40 rounded-lg p-3 font-medium hover:text-orange-600">
            <span className="material-symbols-outlined pr-2">
                {props.iconName}
            </span>
            <span className="underline">{props.textDescription}</span>
        </Link>
    );
}