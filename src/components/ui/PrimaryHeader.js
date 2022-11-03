export default function PrimaryHeader({children, className})
{
    return <h1 className={`text-4xl font-medium mb-5 ${className}`}>{children}</h1>
}