import React from "react";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes } from "../../redux/Actions/index";
import {Link} from "react-router-dom";
import Card from '../Card/Card'
import styles from "../Home/Home.module.css";

export default function Home(){
    const dispatch = useDispatch()
    const AllPokemons = useSelector ((state) => state.pokemons);
    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    useEffect(() => {
        dispatch(getTypes())
    },[dispatch])
    return(
        <div>
            <NavBar/>
            <h1>estas en el Home</h1>
        <div className={styles.cards}>
               {AllPokemons?.map((el) =>{
                 return(
                    <div className="Pokemons" key={el.id}>
                          <Link to={"/Detail/" + el.id} key={el.id}>
                          <Card id={el.id} 
                          name={el.name}
                          image={el.image? el.image: el.image}
                          types={el.types}
                          key={el.id}
                            />
                            </Link>
                    </div>
                    )
                })}
        </div>
        </div>
    )
}