import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";



function HW1(props:any) {
    return (
        <div>
            <Message
                avatar={props.avatar}
                name={props.name}
                message={props.message}
                time={props.time}
                sender={props.sender}
            />

{/*
            <hr/>
*/}
{/*
            для личного творчества, могу проверить
*/}
            <AlternativeMessage/>
        </div>
    );
}

export default HW1;
