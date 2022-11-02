export default function OutlinePrimaryButtonComponent(props)
{

    return (
        <button className="flex flex-row justify-center content-center text-orange-500 w-40 rounded-md pt-2 pb-2 font-medium hover:text-orange-600">
            <span className="material-symbols-outlined pr-2">
                {props.iconName}
            </span>
            <span className="underline">{props.textDescription}</span>
        </button>
    );
}