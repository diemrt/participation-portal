import React from "react";

export default function ContainerComponent(props){
    return (
        <div className="m-10">
            {props.children}
        </div>
    );
}