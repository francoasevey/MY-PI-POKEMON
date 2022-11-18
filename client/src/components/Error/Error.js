import React from "react";
import { Link } from "react-router-dom";
import style from '../Error/Error.module.css';


function Error(){
    return (
        <div className={style.content}>
            <div className={style.content_text}>
            <p className={style.text}>Error 404 Not found!</p>
            <p className={style.text}> There are no Pokemon here :(</p>
            </div>
            <div>
                <Link to="/home">
                <button className={style.button}> Back to home</button>
            </Link>
            </div>
        </div>
    )
}

export default Error;

