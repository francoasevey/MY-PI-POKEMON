import React from 'react';
import {useEffect } from "react";
import { Link ,useParams} from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import {cleanPokemonDetail} from '../../redux/Actions/index'
import styles from '../RandomPokemon/RandomPokemon.module.css';

const RandomPokemon = () => {  
    const dispatch = useDispatch();
    const { id } = useParams();
    const pokemon = useSelector(state => state.pokemons);
    const idPokemon = Array.isArray(pokemon) && pokemon.map(el => el.id);
    let randomPokemon = idPokemon[Math.floor(Math.random() * idPokemon.length)];
    useEffect(() => {
        return () => {
          dispatch(cleanPokemonDetail());
        };
      }, [dispatch], id);

      const randomPoke = () =>{
        dispatch(cleanPokemonDetail());
      }
      
    return (
        <div>
            <Link to={`/Detail/${randomPokemon}`}>
                <button className={styles.rndBut} onClick={randomPoke}>Random Pokemon</button>
                
            </Link>
        </div>
    )
}

export default RandomPokemon;