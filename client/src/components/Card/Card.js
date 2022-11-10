import React from 'react';
import styles from "../Card/Card.module.css";
function Card({id,name,image,types,created}) {
    //let type = types.map((el) => el.name)
    if(created){

        return(
            <div className={styles.mainContainer}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <img  className={styles.imagen} src={image} alt="Img not Found" width="250px" height="250px" />
                <div>
                <h4>Type: {types.map((e)=> e.name)}</h4>
                </div>
            </div>
        )
    } else {
        return(
            <div className={styles.mainContainer}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <img  className={styles.imagen} src={image} alt="Img not Found" width="250px" height="250px" />
                <div>
                     <h4>Type: {types.join(", ")}</h4>
                </div>
            </div>
        )
    }
    }
export default Card;