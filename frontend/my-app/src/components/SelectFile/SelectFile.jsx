import React from "react";
import style from './SelectFile.module.css'

const SelectFile = () => {
    return (
        <input 
        type="file"
        className={style.file}
        />
    )
}

export default SelectFile