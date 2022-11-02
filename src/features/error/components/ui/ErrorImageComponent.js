export default function ErrorImageComponent(props){
    
    return (
        <img alt="error" className="h-96" src={props.path} loading="lazy"></img>
    );
}