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
        <section>
        <div className={styles.firstContainer} >
                
            <button className={styles.home} onClick={(e) => handleReload(e)} >HOME</button>
        <h1>Favorites</h1>
        {
            (favorite.length ===0)?
            <div>there are no favorites... <Loader/> </div>
            : favorite.map(el => {
                return (
                    <div key={el.id} className={styles.mainContainer}>
                        <div className={styles.innerContainer}>
                    <Link className={styles.Link} to={`/Detail/` + el.id}> 
                    <img className={styles.image} src={el.image} alt="not found" width="300px" height="250px" />
                    <h3 className={styles.name}>{el.name} </h3></Link>
                    </div>
                    <button tittle="Deleted Favorites" className={styles.botonDelete} onClick={(e) => {handleDelete(el)}}>❌</button>
                 </div>)
            })
        } 
        </div>
        </section>
    )
}