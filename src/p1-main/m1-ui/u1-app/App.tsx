import React from "react";
import s from "../../../p1-main/m1-ui/u1-app/App.module.css";
import HW1 from "../../../p2-homeworks/h1/HW1";
import Message from "../../../p2-homeworks/h1/Message";

export type MessageData = {
    avatar:string
    name:string
    message:string
    time:string
    sender: boolean
}

const messageData : any = [
    {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Artem",
        message: "npm start нажимал?",
        time: "20:00",
        sender: true,
    },{
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Victor",
        message: "Канешно",
        time: "20:02",
        sender: false,
    }
]

function App(props:any) {
    return (
        <div className={s.App}>
            <div className={s.header}>
                    header
            </div>
            <div className={s.navbar}>
                <div>react homeworks:</div>
                <a href="/hm1"> Homework #1 </a>
            </div>
            <div className={s.content}>
                <HW1
                    avatar={messageData[0].avatar}
                    name={messageData[0].name}
                    message={messageData[0].message}
                    time={messageData[0].time}
                    sender={messageData[0].sender}
                />
                <HW1
                    avatar={messageData[1].avatar}
                    name={messageData[1].name}
                    message={messageData[1].message}
                    time={messageData[1].time}
                    sender={messageData[1].sender}/>

                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                {/*<HW5/>*/}
            </div>



        </div>
    );
}

export default App;
