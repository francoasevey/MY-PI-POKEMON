const { Router } = require('express');
const axios = require('axios');
const { Pokemons, Types} = require('../db');
const router = Router();
const { getAllPokemons, getDbInfo } = require("../controllers/GetPokemons")

router.get('/', async (req,res, next) =>{
    try {
        const name = req.query.name//busqueda por query "/bulbasaur"
        const pokemons = await getAllPokemons();//cambiar por getDbInfo(); cuando cargue la db
        
        /*let full = await Country.findAll({
            include: {
            model: Activity,
             },
             });
             if (!full.length) {
                // bulkCreate busca los campos en el objeto y los pasa a la tabla
                // los datos del objeto para los que no hay campos en la tabla, no los guarda
                await Country.bulkCreate(countries);
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

module.exports = router;