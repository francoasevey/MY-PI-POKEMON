const express = require("express");
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { GetMove } = require("../controllers/GetMove")

const router = express.Router();
//const { Pokemon, Type} = require('../db');

router.get("/", async (req, res) => {
    try {
      const allMoves = await GetMove();
    res.send(allMoves);
       
    } catch (error) {
       res.status(404).send('failure to load Moves')
       
    }
     });

module.exports = router;