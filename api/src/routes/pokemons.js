const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type} = require('../db');
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
                    include: [{
                        model: Type,
                        attributes: ['name'],
                        through: {
                            attributes: [],
                        }
                    }]
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
        defense,
        speed,
        height,
        weight,
        image,
        types,
        created
    } = req.body;console.log(req.body)
    if (!name || !image || !hp || !attack || !defense ||!speed || !height || !weight || !types) {
        res.status(404).send('complete all the data');
      } else {

    let PokemonCreated = await Pokemon.create({
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        image,
        created
    })

    let pokemonDb = await Type.findAll({ where: { name: types } })
    PokemonCreated.addType(pokemonDb)
    res.send('successfully created pokemon!')
}
} catch (error) {
    res.status(404).send('Failed to create pokemon!')
}
});

module.exports = router;