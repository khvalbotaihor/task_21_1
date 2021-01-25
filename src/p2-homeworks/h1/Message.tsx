import React from "react";

function Message(props:any) {
    return (
        <div>
            <img src={props.avatar} alt=""/>
        <h1>{props.name}</h1>
            <p>{props.message}</p>
            <p>{props.time}</p>
        </div>
    );
}

export default Message;
