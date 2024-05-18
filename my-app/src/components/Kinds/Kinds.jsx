import React from "react";
import style from './Kinds.module.css'
import Checkbox from "../Categories/Categories";

const Kinds = () => {
    return (
        <div className={style.main}> 
            <div className="group">Categories</div>
            <input className={style.inp} type="checkbox" required /> Banks
            <input className={style.inp} type="checkbox" required /> Promo
            <input className={style.inp} type="checkbox" required /> Image
            <input className={style.inp} type="checkbox" required /> Social network
            

        </div>
    )
}

export default Kinds