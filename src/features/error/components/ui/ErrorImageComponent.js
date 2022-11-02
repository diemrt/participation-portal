export default function ErrorImageComponent(props){
    
    return (
        <img alt="error" className="h-80" src={props.path} loading="lazy"></img>
    );
}