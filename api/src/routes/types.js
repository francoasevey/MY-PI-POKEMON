const express = require("express");
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { GetTypes } = require("../controllers/GetTypes")

const router = express.Router();
//const { Pokemon, Type} = require('../db');

router.get("/", async (req, res) => {
    try {
      const allTypes = await GetTypes();
    res.send(allTypes);
       
    } catch (error) {
       res.status(404).send('failure to load types')
       
    }
     });

module.exports = router;