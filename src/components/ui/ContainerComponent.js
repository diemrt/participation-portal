import React from "react";

export default function ContainerComponent({children}){
    return (
        <div className="m-10 text-slate-900">
            {children}
        </div>
    );
}