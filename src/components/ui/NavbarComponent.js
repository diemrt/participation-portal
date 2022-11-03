
export default function NavbarComponent(props){

    return (
        <div className="flex flex-col items-end">
            {props.children}
        </div>
    );
}