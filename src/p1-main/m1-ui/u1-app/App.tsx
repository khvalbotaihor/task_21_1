import React from "react";
import s from "../../../p1-main/m1-ui/u1-app/App.module.css";
import HW1 from "../../../p2-homeworks/h1/HW1";



function App() {
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
                <HW1/>

                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                {/*<HW5/>*/}
            </div>



        </div>
    );
}

export default App;
