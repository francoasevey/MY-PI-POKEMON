import React from 'react';
import { useDispatch } from 'react-redux';

import {Favorite} from '../../redux/Actions/index'
import styles from "../Card/Card.module.css";
function Card({id,name,image,types,hp,attack,defense,speed,height,weight,add}) {
    //let type = types.map((el) => el.name)
    const dispatch = useDispatch()

    
    function handleClick(e){
        dispatch(Favorite(add))
        e.preventDefault();
    }
        return(
            <div className={styles.mainContainer}>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <img  className={styles.imagen} src={image} alt="Img not Found" width="250px" height="250px" />
                <h3>Hp {hp}</h3>
                <h3>Attack {attack}</h3>
                <h3>Defense {defense}</h3>
                <h3>Speed {speed}</h3>
                <h3>Height {height}</h3>
                <h3>Weight {weight}</h3>
                <div>
                <h3 className={styles.p}>Types: {types[1] ? types[0] + " / " + types[1] : types[0]}</h3>
                </div>
                <h5 ><button title="Add to Favorites" className={styles.botonfavorites} onClick={(e) => handleClick(e) } >ADD</button></h5>
            </div>
        )
    
    }
export default Card;