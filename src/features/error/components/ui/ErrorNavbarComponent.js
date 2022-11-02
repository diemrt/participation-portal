
export default function ErrorNavbarComponent(props){

    return (
        <div className="flex flex-col items-end">
            {props.children}
        </div>
    );
}