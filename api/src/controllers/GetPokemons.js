const axios = require('axios');
const { Pokemon, Type} = require('../db');

const getApiInfo = async () =>{
    try {
        const ApiUrl = await axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12")
        .then((data) => {
          return data.data.results;
        })
        .then((data) => {
          return Promise.all(data.map((el) => axios.get(el.url))); //entro a cada elemento url y le hago un get
        })
        .then((data) => {
          return data.map((el) => el.data); // guardo todo la informacion de cada pokemon con todos su datos en mi variable Api
        });
      const apiInfo = ApiUrl.map((el) => {
        return {
          id: el.id,
          name: el.name,
          hp: el.stats[0].base_stat,
          attack: el.stats[1].base_stat,
          defense: el.stats[2].base_stat,
          speed: el.stats[5].base_stat,
          height: el.height,
          weight: el.weight,
          image: el.sprites.other.home.front_default,
          types: el.types.map((e) => e.type.name),
        };
      });
      return apiInfo;
    } catch (error) {
        res.status(404).send('Fetching the data from the API failed');
    }
};
const getDbInfo = async () => {
    try {
        const dbPokemons = await Pokemon.findAll({
        include:{
            model: Type,
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