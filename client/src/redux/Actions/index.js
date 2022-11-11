import axios from 'axios';
import{
    GET_ALL_POKEMONS,
    GET_TYPES,
    GET_NAME_POKEMON,
    FILTER_CREATED,
    FILTER_BY_TYPES,
    FILTER_ABC
} from './TypeActions'

export function getPokemons(){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/pokemons');
            return dispatch({
                type : GET_ALL_POKEMONS,
                payload: json.data
            })
        } catch (error) {
            console.log(error && window.alert("failed to load pokemons ❌"))
            
        }
    }
}
export function getTypes(){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/types');
            return dispatch({
                type : GET_TYPES,
                payload: json.data
            })
        } catch (error) {
            console.log(error && window.alert("failed to load types ❌"))
            
        }
    }
}
export function getNamePokemon(name){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/pokemons?name=' + name);
            return dispatch({
                type : GET_NAME_POKEMON,
                payload: json.data
            })
        } catch (error) {
            console.log(error && window.alert("pokemon not found! ❌"))
            
        }
    }
}
export function filterCreated(payload){
    // console.log(payload)
     return{
         type: FILTER_CREATED,
         payload
     }
 }
 export function filterType(payload){
    // console.log(payload)
     return{
         type: FILTER_BY_TYPES,
         payload
     }
 }
 export function orderByABC(payload){
    return{
        type: FILTER_ABC,
        payload
    }
 }