export default function LogoComponent(props){

    return <img alt="logo" className="h-12 w-12" src={props.path} loading="lazy"></img>;
}