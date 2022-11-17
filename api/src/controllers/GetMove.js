const axios = require('axios');
const {Move} = require('../db');

const GetMove = async () => {
    try {
      let moves = await Move.findAll({ attributes: ["id","name"] });
      if (!moves.length) {
        let movesUrl = 'https://pokeapi.co/api/v2/move/?offset=0&limit=20';
        moves = await axios.get(movesUrl);
        moves = moves.data.results.map((el) => ({
          name: el.name,
        }));
        await Move.bulkCreate(moves);
      }
      return moves;
    } catch (error) {
        res.status(404).send('Fetching the Moves from the API failed');
    }
  };
  
  module.exports={
    GetMove
 }
  