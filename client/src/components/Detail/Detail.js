import React from "react";
import {useEffect } from "react";
import {Link , useParams, useHistory} from 'react-router-dom';
import {getDetailPokemons, cleanPokemonDetail,getPokemons,deletePokemon} from '../../redux/Actions/index';
import { useDispatch,useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import styles from '../Detail/Detail.module.css'

export default function Detail (){
    const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getDetailPokemons(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(cleanPokemonDetail());
    };
  }, [dispatch]);

  const history = useHistory()
  const pokemons = useSelector((state) => state.pokemons)
  const myPokemons = useSelector((state) => state.detail);
  console.log(myPokemons);

  const handlerDelete = () => {
    dispatch(deletePokemon(id));
    alert("Pokemon eliminado");
    history.push("/home");
    dispatch(getPokemons());
  };

     return(
        <div className={styles.Detail}>
            <div>
            <Link to = '/home'>
                <button className={styles.button}>Go Home!</button>
            </Link>
            </div>
            {
               myPokemons.length > 0 ?
               <div>
                   <h1 className={styles.text}>NAME {myPokemons[0].name}</h1>
                   <h2 className={styles.text}>ID {myPokemons[0].id}</h2>
                   <img className={styles.image} src= {myPokemons[0].image? myPokemons[0].image : myPokemons[0].image} alt="not found" width="300px" height="250px" />
                   <h2 className={styles.text}>HP: {myPokemons[0].hp}</h2>  
                   <h2 className={styles.text}>ATTACK: {myPokemons[0].attack}</h2>
                   <h2 className={styles.text}>DEFENSE: {myPokemons[0].defense}</h2>
                   <h2 className={styles.text}>SPEED: {myPokemons[0].speed}⚡</h2>
                   <h2 className={styles.text}>HEIGHT: {myPokemons[0].height}📏</h2>
                   <h2>WEIGHT: {myPokemons[0].weight}</h2>
                   <h3 className={styles.content}>TYPES: {myPokemons[0].types.map((e) => (e.name ? e.name : e))}</h3>
                   {myPokemons[0].created && (
                    <div className={styles.buttons}>
                      <Link
                        to={"/PokemonEdit/" + id}
                        className={`${styles.deleteButton} ${styles.buttonRed}`}
                      >
                        Edit Pokemon
                      </Link>

                      <button
                        onClick={(e) => handlerDelete(e)}
                        className={styles.deleteButton}
                      >
                        Delete Pokemon
                      </button>
                    </div>
                  )}
               </div> :  <div className='loading'>
               <h1> loading...<Loader/> </h1>
                    </div>
            }

        </div> 
    )
}