import React from "react";
import {Link} from "react-router-dom";
import styles from "../NavBar/NavBar.module.css"
const NavBar = () => {
    return(
        <div className={styles.background}>
           <Link to='/'><button className={styles.button}></button></Link> 
            <Link className={styles.filter} to="/CreatePokemon">CreatePokemon</Link>
            <Link className={styles.filter} to="/Home">Home</Link>
            <Link className={styles.filter} to="About">About</Link>
        </div>
    )
}
export default NavBar;