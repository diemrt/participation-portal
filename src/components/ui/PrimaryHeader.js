export default function PrimaryHeader(props)
{
    return <h1 className={`text-4xl font-medium mb-5 ${props.className}`}>{props.children}</h1>
}