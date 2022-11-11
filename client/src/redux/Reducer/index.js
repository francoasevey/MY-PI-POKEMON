import{
    GET_ALL_POKEMONS,
    GET_TYPES,
    GET_NAME_POKEMON
} from '../Actions/TypeActions'

const initialState = {
    pokemons: [],
    AllPokemons: [],
    types: []
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_ALL_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                AllPokemons: action.payload
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        case GET_NAME_POKEMON:
            return{
                ...state,
                pokemons: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;