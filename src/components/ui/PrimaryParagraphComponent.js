export default function PrimaryParagraphComponent({children, className})
{
    return (
        <p className={`mb-2 text-slate-700 text-xl ${className}`}>
            {children}
        </p>
    );
}