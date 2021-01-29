import React from "react";
import s from "./Message.module.css"

function Message(props: any) {
    return (<div>
        <div className={s.message}>
            <div className={s.image}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.postDetails}>
                <div className={s.name}>{props.name}</div>
                <div className={s.postText}>
                    <p className={s.text}>{props.message}</p>
                    <p className={s.data}>{props.time}</p>
                </div>

            </div>
        </div>
{/*        <div className="msg-left-sub">
                <img src={props.avatar} />
                <div className="msg-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                <small>05:25 am</small>
        </div>*/}
    </div>

);
}

export default Message;
