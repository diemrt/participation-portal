import React from "react";

export default function ContainerComponent({children}){
    return (
        <div className="m-10 text-slate-900 font-body">
            {children}
        </div>
    );
}