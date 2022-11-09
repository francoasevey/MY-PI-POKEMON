import axios from 'axios';
import{
    GET_ALL_POKEMONS
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
            console.log(error && window.alert("fallo al cargar los pokemons"))
            
        }
    }
}