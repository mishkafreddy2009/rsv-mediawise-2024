import React from "react";
import style from './Time.module.css'

const Time = () => {
    return (
        <div>
            <div className="before">
                <p>From</p>
                <input type="text" />
            </div>
            
            <div className="after">
                <p>to</p>
                <input type="text" />
            </div>
        </div>
    )
}

export default Time;