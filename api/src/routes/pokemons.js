const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type, Ability, Move} = require('../db');
const router = Router();
const { getAllPokemons, getDbInfo } = require("../controllers/GetPokemons")

router.get('/', async (req,res, next) =>{
    try {
        const name = req.query.name//busqueda por query "/bulbasaur"
        const pokemons = await getAllPokemons();//cambiar por getDbInfo(); cuando cargue la db
        
        /*let full = await Pokemon.findAll({
            include: {
            model: Type,
             },
             });
             if (!full.length) {
                // bulkCreate busca los campos en el objeto y los pasa a la tabla
                // los datos del objeto para los que no hay campos en la tabla, no los guarda
                await Pokemon.bulkCreate(pokemons);
                 } */
    if (name){
        let pokemonName = await pokemons.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        pokemonName.length ? 
        res.status(200).send(pokemonName):
        res.status(404).send('pokemon not found');//en caso de que no se encuentre por query
    }
    else if(pokemons) {
        res.status(200).send(pokemons)
    }
    } catch (error) {
       res.status(404).send('failed to get pokemons');
    }
})

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try{
        if(!id.includes('-')){
            let allPokemons = await getAllPokemons();//me traigo todo
            let idPokemon = await allPokemons.filter(el => el.id === parseInt(id));
                await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                res.status(200).send(idPokemon)
            }
            else{
                let pokemonFound = await Pokemon.findByPk(id, {
                  include: [
                    {
                      model: Type,
                      attributes: ["name"],
                      through: {
                          attributes: [],
                      }
                    },
                    {
                      model: Ability,
                      attributes: ["name"],
                      through: {
                          attributes: [],
                      }
                    },
                    {
                      model: Move,
                      attributes: ["name"],
                      through: {
                          attributes: [],
                     }
                    }
                    ],
                })
                const array = []
                array.push(pokemonFound)
                res.status(200).json(array)
            }
            } 
            catch (error){
                res.status(404).send('id not found!')
        }
})

router.post('/',async (req,res, next) =>{
    try {
    let {
        name,
        hp,
        attack,
        specialAttack,
        specialDefense,
        defense,
        speed,
        height,
        weight,
        image,
        types,
        abilities,
        moves,
        created
    } = req.body;console.log(req.body)
    if (!name || !image || !hp || !attack || !defense ||!speed || !height || !weight || !types) {
        res.status(404).send('complete all the data');
      } else {

    let PokemonCreated = await Pokemon.create({
        name,
        hp,
        attack,
        specialAttack,
        defense,
        specialDefense,
        speed,
        height,
        weight,
        image,
        created
    })

    let pokemonType = await Type.findAll({ where: { name: types } })
    PokemonCreated.addType(pokemonType)

    let pokemonAbility =  await Ability.findAll({ where: { name: abilities } })
    PokemonCreated.addAbility(pokemonAbility)

    let pokemonMove =  await Move.findAll({ where: { name: moves } })
    PokemonCreated.addMove(pokemonMove)
    res.send('successfully created pokemon!')
}
} catch (error) {
    res.status(404).send('Failed to create pokemon!')
}
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const Delete = await Pokemon.findByPk(id);
      if (!Delete) {
        res.status(400).send("The pokemon you want to eliminate does not exist");
      } else {
        Delete.destroy();
        return res.status(200).send("pokemon eliminated successfully");
      }
    } catch (error) {
        res.status(404).send('failed to delete pokemon!')
    }
  });

  router.put("/modification/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const {
        name,
        hp,
        attack,
        specialAttack,
        specialDefense,
        defense,
        speed,
        height,
        weight,
        image,
        types,
        abilities,
        moves,
        created
      } = req.body;
      if (!name || !image || !hp || !attack || !defense ||!speed || !height || !weight || !types) {
        res.status(404).send('complete all the data');
      } else {

          const findPokemon = await Pokemon.findByPk(id);
          await findPokemon.update(
            {
              name,
              hp,
              attack,
              specialAttack,
              defense,
              specialDefense,
              speed,
              height,
              weight,
              image,
              created
            },
            { where: { id: id } }
          );
          const typeDB = await Type.findAll({
            where: { name: types },
          });
          await findPokemon.setTypes(typeDB);

          const abilitiesDB = await Ability.findAll({
            where: { name: abilities },
          });
          await findPokemon.setAbilities(abilitiesDB);

          const movesDB = await Move.findAll({
            where: { name: moves },
          });
          await findPokemon.setMoves(movesDB);


          res.status(200).send("successfully modified pokemon!");
      }
    } catch (error) {
        res.status(404).send('failed to modified pokemon!')
    }
  });
  

module.exports = router;