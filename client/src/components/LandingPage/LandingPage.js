import React from "react";
import {Link} from "react-router-dom";
import styles from "../LandingPage/LandingPage.module.css"
import linkedin from "../LandingPage/linkedin.png";
import GitHub from  "../LandingPage/GitHub.png"

export default function LandingPage () {
    return (
        <div className={styles.fondo}>
          <div  className={styles.texto}>
          <h1>WELCOME TO MY POKE APP</h1>
          <Link to='/Home'>
          <button className={styles.button}></button>
          </Link> 
          </div>
         <div className={styles.icon} >
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/francoasevey/"
          target="_blank"
        >
          <img className={styles.image} alt="linkedin" src={linkedin} />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/francoromeo"
          target="_blank"
        >
          <img className={styles.imagetwo} alt="github" src={GitHub} />
        </a>
        </div>
        </div>
           
    )
}
