import React from "react";
import s from "./Message.module.css"
import {MessageData} from "../../p1-main/m1-ui/u1-app/App";

function Message(props:MessageData) {
    return (<div>
        <div className={props.sender ? s.message : s.messageResponder}>
            <div className={ s.image}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={props.sender ? s.postDetails : s.postDetailsRight}>
                <div className={s.name}>{props.name}</div>
                <div className={s.postText}>
                    <p className={s.text}>{props.message}</p>
                    <p className={s.data}>{props.time}</p>
                </div>

            </div>
        </div>
    </div>

);
}

export default Message;
