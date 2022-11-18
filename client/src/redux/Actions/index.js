import axios from 'axios';
import{
    GET_ALL_POKEMONS,
    GET_TYPES,
    GET_ABILITY,
    GET_MOVE,
    GET_NAME_POKEMON,
    FILTER_CREATED,
    FILTER_BY_TYPES,
    FILTER_BY_ABILITIES,
    FILTER_BY_MOVES,
    FILTER_ABC,
    ORDEN_BY_ATTACK,
    ORDEN_BY_DEFENSE,
    ORDEN_BY_HEIGHT,
    ORDEN_BY_WEIGHT,
    GET_DETAILS,
    CLEAN_DETAILS,
    ORDEN_BY_SPEED,
    EDIT_POKEMON,
    DELETE_POKEMON,
    PREV,
    NEXT
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
export function getAbility(){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/abilities');
            return dispatch({
                type : GET_ABILITY,
                payload: json.data
            })
        } catch (error) {
            console.log(error && window.alert("failed to load abilities ❌"))
            
        }
    }
}
export function getMove(){
    return async function(dispatch){
        try {
            let json = await axios.get('http://localhost:3001/moves');
            return dispatch({
                type : GET_MOVE,
                payload: json.data
            })
        } catch (error) {
            console.log(error && window.alert("failed to load moves ❌"))
            
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
     return{
         type: FILTER_BY_TYPES,
         payload
     }
 }
 export function filterAbility(payload){
     return{
         type: FILTER_BY_ABILITIES,
         payload
     }
 }
 export function filterMove(payload){
    return{
        type: FILTER_BY_MOVES,
        payload
    }
}
 export function orderByABC(payload){
    return{
        type: FILTER_ABC,
        payload
    }
 }
 export function orderByAttack(payload){
    return({
        type: ORDEN_BY_ATTACK,
        payload
    })
}
export function orderByDefense(payload){
    return({
        type: ORDEN_BY_DEFENSE,
        payload
    })
}
export function orderBySpeed(payload){
    return({
        type: ORDEN_BY_SPEED,
        payload
    })
}
export function orderByHeight(payload){
    return({
        type: ORDEN_BY_HEIGHT,
        payload
    })
}
export function orderByWeight(payload){
    return({
        type: ORDEN_BY_WEIGHT,
        payload
    })
}
export function getDetailPokemons(id){
    return async function (dispatch){
        try{
            let json = await axios.get("http://localhost:3001/pokemons/" + id);
            return dispatch ({
                type: GET_DETAILS,
                payload: json.data
            }) 
        } catch (error){
            console.log(error && alert("id not found! ❌"))
        }
    }
 }
 export function cleanPokemonDetail(){
    return{
        type: CLEAN_DETAILS
    }
 }
 export function postPokemon(payload){
    return async function(){
        try {
        let json = await axios.post("http://localhost:3001/pokemons", payload)
        return json
    } catch (error) {
        console.log(error && alert("failed to create Pokemon! ❌"))
    }
  }
};
export function editPokemon(id, PokeEdit) {
    return async function (dispatch) {
        try {
           const json = await axios.put(`http://localhost:3001/pokemons/modification/${id}`, PokeEdit);
            return dispatch({
              type: EDIT_POKEMON,
              payload: json.data,
            });  
        } catch (error) {
            console.log(error && alert("failed to Edit Pokemon! ❌"))
        }
    };
  }
  export function deletePokemon(id, deletePoke) {
    return async function (dispatch) {
        try {
            await axios.delete(`http://localhost:3001/pokemons/delete/${id}`, {
                deletePoke: deletePoke,
            });
            return dispatch({
              type: DELETE_POKEMON,
            });  
        } catch (error) {
            console.log(error && alert("failed to delete Pokemon! ❌")) 
        }
    };
  }
  export function prevCard(id){
    return async function (dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${parseInt(id) - 1}`);
            return dispatch ({
                type: PREV,
                payload: json.data
            }) 
        } catch (error){
            console.log(error && alert("previous pokemon id not found ❌"))
        }
    }
 }
 export function nextCard(id){
    return async function (dispatch){
        try{
            let json = await axios.get(`http://localhost:3001/pokemons/${parseInt(id) + 1}`);
            return dispatch ({
                type: NEXT,
                payload: json.data
            }) 
        } catch (error){
            console.log(error && alert("next pokemon id not found ❌"))
        }
    }
 }