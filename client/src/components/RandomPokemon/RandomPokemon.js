import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from '../RandomPokemon/RandomPokemon.module.css';

const RandomPokemon = () => {   
    const pokemon = useSelector(state => state.pokemons);
    const idPokemon = Array.isArray(pokemon) && pokemon.map(el => el.id);
    let randomPokemon = idPokemon[Math.floor(Math.random() * idPokemon.length)];

    return (
        <div>
            <Link to={`/Detail/${randomPokemon}`}>
                <button className={styles.rndBut}>Random Pokemon</button>
            </Link>
        </div>
    )
}

export default RandomPokemon;