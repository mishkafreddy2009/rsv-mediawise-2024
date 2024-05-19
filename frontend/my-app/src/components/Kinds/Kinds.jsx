import React from "react";
import style from './Kinds.module.css'
import Checkbox from "../Categories/Categories";

const Kinds = () => {
    return (
        <div className={style.main}> 
            <div className="group">Categories</div>
            <input className={style.inp} type="checkbox" /> Banks
            <input className={style.inp} type="checkbox" /> Promo
            <input className={style.inp} type="checkbox" /> Image
            <input className={style.inp} type="checkbox" /> Social network
            

        </div>
    )
}

export default Kinds