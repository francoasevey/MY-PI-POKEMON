import{
    GET_ALL_POKEMONS,
    GET_TYPES,
    GET_NAME_POKEMON,
    FILTER_CREATED,
    FILTER_BY_TYPES,
    FILTER_ABC
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
        case FILTER_BY_TYPES:
                const type = state.AllPokemons
                const typesFilter = action.payload === 'none' ? type :
                type.filter(el => el.types.includes(action.payload) || el.types.map((e) => e.name).includes(action.payload));
                return {
                ...state,
                pokemons: typesFilter
                }
        case FILTER_ABC:
                const SortedPokemonsABC = action.payload === 'A-Z' ? 
                state.pokemons.sort(function( a , b ) {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                     return 1
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()){
                        return -1
                    }
                return 0
            }) : state.pokemons.sort(function( a , b ) {
                if(a.name.toLowerCase() > b.name.toLowerCase()){
                    return -1
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()){
                     return 1
                }
                return 0
            })
                return {
                ...state,
                pokemons: SortedPokemonsABC
            }
        default:
            return state
    }
}
export default rootReducer;