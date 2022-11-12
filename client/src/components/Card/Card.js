import React from 'react';
import styles from "../Card/Card.module.css";
function Card({id,name,image,types,created}) {
    //let type = types.map((el) => el.name)
    

        return(
            <div className={styles.mainContainer}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <img  className={styles.imagen} src={image} alt="Img not Found" width="250px" height="250px" />
                <div>
                <h3 className={styles.p}>
                {types[1] ? types[0] + " / " + types[1] : types[0]}
                </h3>
                </div>
            </div>
        )
    
    }
export default Card;