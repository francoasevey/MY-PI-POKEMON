import{
    GET_ALL_POKEMONS,
    GET_TYPES,
    GET_NAME_POKEMON,
    FILTER_CREATED
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
        case FILTER_CREATED:
             const AllPokemons = state.AllPokemons
            const createdFilter =action.payload === 'All' ? AllPokemons : 
               action.payload ==='created' ? AllPokemons.filter(el =>el.created === true) :
               AllPokemons.filter(el =>!el.created)
             return{
                ...state,
                pokemons:  createdFilter
                } 
        default:
            return state
    }
}
export default rootReducer;