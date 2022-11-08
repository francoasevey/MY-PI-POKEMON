const axios = require('axios');
const {Type} = require('../db');

const GetTypes = async () => {
    try {
      let types = await Type.findAll({ attributes: ["id","name"] });
      if (!types.length) {
        let typeUrl = `https://pokeapi.co/api/v2/type`;
        types = await axios.get(typeUrl);
        types = types.data.results.map((el) => ({
          name: el.name,
        }));
        await Type.bulkCreate(types);
      }
      return types;
    } catch (error) {
        res.status(404).send('Fetching the types from the API failed');
    }
  };
  
  module.exports={
    GetTypes
 }
  