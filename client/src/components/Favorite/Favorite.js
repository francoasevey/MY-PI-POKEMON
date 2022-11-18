import React from 'react';
import Loader from '../Loader/Loader';
import { useSelector , useDispatch } from 'react-redux';
import { Link , useHistory} from "react-router-dom";
import { deleteFavorite } from '../../redux/Actions/index';
import styles from '../Favorite/Favorite.module.css'

export default function Favorites(){
    const favorite = useSelector((state) => state.favorites) 
    const history = useHistory()
    const dispatch = useDispatch()

    function handleReload() {
        history.push('/Home')
        
    }

    function handleDelete(e){
        dispatch(deleteFavorite(e))
    }

    return (
        <>
        <div className={styles.firstContainer} >
                
            <button className={styles.home} onClick={(e) => handleReload(e)} >HOME</button>
        <h1>Favorites</h1>
        {
            (favorite ===!favorite)?
            <div>No hay FAVORITOS!... <Loader/> </div>
            : favorite.map(el => {
                return (
                    <div className={styles.mainContainer}>
                        <div className={styles.innerContainer}>
                    <Link className={styles.Link} to={`/Detail/` + el.id}> 
                    <img className={styles.image} src={el.image} alt="not found" width="300px" height="250px" />
                    <h3 className={styles.name}>{el.name} </h3></Link>
                    </div>
                    <button tittle="Deleted Favorites" className={styles.botonDelete} onClick={(e) => {handleDelete(el)}}>X</button>
                 </div>)
            })
        } 
        </div>
        </>
    )
}