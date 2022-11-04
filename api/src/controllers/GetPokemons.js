const axios = require('axios');
const { Pokemon, Types} = require('../db');

const getApiInfo = async () =>{
    try {
        const apiUrl = await  axios.get("https://pokeapi.co/api/v2/pokemon");
        const apiInfo = await apiUrl.data.results.map(el =>{
            return{
                id: el.id,
                name: el.name,
                hp: el.stats[0].base_stat,
                attack: el.stats[1].base_stat,
                defense: el.stats[2].base_stat,
                speed: el.stats[5].base_stat,
                height: el.height,
                weight: el.weight,
                imageDefault: el.sprites.other.home.front_default,
                types: el.types.map((e) => e.type.name),
            }
        })
        return apiInfo;
    } catch (error) {
        res.status(404).send('Fetching the data from the API failed');
    }
};
const getDbInfo = async () => {
    try {
        const dbPokemons = await Pokemon.findAll({
        include:{
            model: Types,
            attributes: ["name"],
            through: {
                attributes: [],
            }
        }
    });
    return dbPokemons;
    
} catch (error) {
    res.status(404).send('opps! an error occurred');
}
};
const getAllPokemons = async () => {
    try {
    const apiInfo = await getApiInfo();
    const dbPokemons = await getDbInfo();
    const infoTotal = apiInfo.concat(dbPokemons);
    return infoTotal;
} catch (error) {
    res.status(404).send('error joining api and db');
}
}

module.exports={
    getAllPokemons,
    getDbInfo,
    getApiInfo,
 }