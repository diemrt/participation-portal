import React from "react";

export default function ContainerComponent(props){
    return (
        <div className="m-10 text-slate-900">
            {props.children}
        </div>
    );
}