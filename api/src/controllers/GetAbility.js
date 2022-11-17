const axios = require('axios');
const {Ability} = require('../db');

const GetAbility = async () => {
    try {
      let abilities = await Ability.findAll({ attributes: ["id","name"] });
      if (!abilities.length) {
        let AbilityUrl = 'https://pokeapi.co/api/v2/ability/?offset=0&limit=20';
        abilities = await axios.get(AbilityUrl);
        abilities = abilities.data.results.map((el) => ({
          name: el.name,
        }));
        await Ability.bulkCreate(abilities);
      }
      return abilities;
    } catch (error) {
        res.status(404).send('Fetching the abilities from the API failed');
    }
  };
  
  module.exports={
    GetAbility
 }
  