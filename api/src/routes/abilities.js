const express = require("express");
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { GetAbility } = require("../controllers/GetAbility")

const router = express.Router();
//const { Pokemon, Type} = require('../db');

router.get("/", async (req, res) => {
    try {
      const allGetAbilities = await GetAbility();
    res.send(allGetAbilities);
       
    } catch (error) {
       res.status(404).send('failure to load types')
       
    }
     });

module.exports = router;