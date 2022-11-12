/*
 import React from "react";
import {useEffect } from "react";
import {Link , useParams} from 'react-router-dom';
import {getDetailPokemons, cleanPokemonDetail} from '../../redux/Actions/index';
import { useDispatch,useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import styles from '../Detail/Detail.module.css'

export default function Detail ({created}){
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

  const myPokemons = useSelector((state) => state.detail);
  console.log(myPokemons);
  if(created){
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
                   <h2>tiposAPI: {myPokemons[0].types.join(", ")}</h2>
               </div> :  <div className='loading'>
                        <p> <Loader/> </p>
                    </div>
            }

        </div> 
    )
  } else {

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
                     <h3 className={styles.content}>tiposDB: {myPokemons[0].types.map((d) => (
                <li>{d.name}</li>
              ))}</h3>
                 </div> :  <div className='loading'>
                          <p> <Loader/> </p>
                      </div>
              }
  
          </div> 
      )
  }
}
 */