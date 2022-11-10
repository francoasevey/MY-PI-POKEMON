import React from 'react';
import styles from "../Card/Card.module.css";
function Card({id,name,image,types}) {
    //let type = types.map((el) => el.name)
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
export default Card;