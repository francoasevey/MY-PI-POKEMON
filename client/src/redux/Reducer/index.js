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
    ORDEN_BY_SPEED,
    ORDEN_BY_HEIGHT,
    ORDEN_BY_WEIGHT,
    GET_DETAILS,
    CLEAN_DETAILS,
    POST_POKEMON,
    EDIT_POKEMON,
    DELETE_POKEMON,
    PREV,
    NEXT,
    FAVORITE,
    DELETE_FAVORITE
} from '../Actions/TypeActions'

const initialState = {
    pokemons: [],
    AllPokemons: [],
    types: [],
    abilities: [],
    moves: [],
    detail: [],
    favorites: [],
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
        case GET_ABILITY:
            return{
                ...state,
                abilities: action.payload
                }
        case GET_MOVE:
            return{
                ...state,
                moves: action.payload
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
        case FILTER_BY_ABILITIES:
                const Ability = state.AllPokemons
                const abilityFilter = action.payload === 'none' ? Ability :
                Ability.filter(el => el.abilities.includes(action.payload) || el.abilities.map((e) => e.name).includes(action.payload));
                return {
                ...state,
                pokemons: abilityFilter
                }
        case FILTER_BY_MOVES:
                const Moves = state.AllPokemons
                const MovesFilter = action.payload === 'none' ? Moves :
                Moves.filter(el => el.moves.includes(action.payload) || el.moves.map((e) => e.name).includes(action.payload));
                return {
                ...state,
                pokemons: MovesFilter
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
        case ORDEN_BY_ATTACK:
                const FilterAttack= action.payload === 'High' ? 
                state.pokemons.sort(function(a,b) {
                    if(a.attack < b.attack){
                         return 1
                        }
                    if (b.attack < a.attack){
                        return -1
                        }
                        return 0
                }) : state.pokemons.sort(function(a,b) {
                    if(a.attack < b.attack){
                        return -1
                        }
                    if (b.attack < a.attack){
                        return 1
                        }
                        return 0
                })
                        return {
                ...state,
                pokemons: FilterAttack
                }
        case ORDEN_BY_DEFENSE:
                const FilterDefense= action.payload === 'High' ? 
                state.pokemons.sort(function(a,b) {
                    if(a.defense < b.defense){
                         return 1
                        }
                    if (b.defense < a.defense){
                        return -1
                        }
                        return 0
                }) : state.pokemons.sort(function(a,b) {
                    if(a.defense < b.defense){
                        return -1
                        }
                    if (b.defense < a.defense){
                        return 1
                        }
                        return 0
                })
                        return {
                ...state,
                pokemons: FilterDefense
                }
        case ORDEN_BY_HEIGHT:
                const FilterHeight= action.payload === 'High' ? 
                state.pokemons.sort(function(a,b) {
                    if(a.height < b.height){
                        return 1
                        }
                    if (b.height < a.height){
                        return -1
                        }
                        return 0
                    }) : state.pokemons.sort(function(a,b) {
                        if(a.height < b.height){
                        return -1
                        }
                        if (b.height < a.height){
                        return 1
                        }
                        return 0
                    })
                        return {
                    ...state,
                    pokemons: FilterHeight
                    }
        case ORDEN_BY_SPEED:
                const FilterSpeed= action.payload === 'High' ? 
                state.pokemons.sort(function(a,b) {
                    if(a.speed < b.speed){
                        return 1
                        }
                    if (b.speed < a.speed){
                        return -1
                        }
                        return 0
                    }) : state.pokemons.sort(function(a,b) {
                        if(a.speed < b.speed){
                        return -1
                        }
                        if (b.speed < a.speed){
                        return 1
                        }
                        return 0
                    })
                        return {
                    ...state,
                    pokemons: FilterSpeed
                    }
        case ORDEN_BY_WEIGHT:
                const FilterWeight= action.payload === 'High' ? 
                state.pokemons.sort(function(a,b) {
                    if(a.weight < b.weight){
                        return 1
                        }
                    if (b.weight < a.weight){
                        return -1
                        }
                        return 0
                    }) : state.pokemons.sort(function(a,b) {
                        if(a.weight < b.weight){
                        return -1
                        }
                        if (b.weight < a.weight){
                        return 1
                        }
                        return 0
                    })
                        return {
                    ...state,
                    pokemons: FilterWeight
                    }
        case GET_DETAILS:
                        return{
                ...state,
                detail: action.payload
                    }
        case CLEAN_DETAILS:
                        return{
                ...state,
                detail: []
                        }
        case POST_POKEMON:
                return {
                ...state,
                }
        case EDIT_POKEMON:
                return {
                ...state,
                }
        case DELETE_POKEMON:
                return {
                ...state,
                };
        case PREV:
                return {
                ...state,
                };
        case NEXT:
                return {
                ...state,
                };
        case FAVORITE: 
                return{
                ...state,
                favorites: state.favorites.find((pokemon) => pokemon.id === action.payload.id) ? [...state.favorites] 
                : [...state.favorites, action.payload]
                 }
                  
        case DELETE_FAVORITE:
                return{
                ...state,
                favorites: state.favorites.filter(pokemon => pokemon.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default rootReducer;