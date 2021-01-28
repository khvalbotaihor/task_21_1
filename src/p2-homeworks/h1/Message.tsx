import React from "react";
import s from "./Message.module.css"

function Message(props: any) {
    return (
        <div className={s.message}>
            <div className={s.image}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.postDetails}>
                <h1>{props.name}</h1>
                <div className={s.postText}>
                    <p>{props.message}</p>
                    <p>{props.time}</p>
                </div>

            </div>
        </div>
    );
}

export default Message;
