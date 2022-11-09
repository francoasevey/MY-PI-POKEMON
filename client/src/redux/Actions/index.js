import axios from 'axios';
import{
    GET_ALL_POKEMONS,
    GET_TYPES
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