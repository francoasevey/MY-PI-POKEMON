import React from "react";
import NavBar from "../NavBar/NavBar";
import {useState , useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { getPokemons, getTypes } from "../../redux/Actions/index";

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

        </div>
    )
}