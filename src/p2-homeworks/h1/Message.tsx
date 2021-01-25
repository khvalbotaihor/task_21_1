import React from "react";

function Message(props: any) {
    return (
        <div>
            <div>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <h1>{props.name}</h1>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </div>
    );
}

export default Message;
