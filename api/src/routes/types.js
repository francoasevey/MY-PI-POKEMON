const express = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = express.Router();
const { Pokemon, Type} = require('../db');

router.get("/", async (req, res) => {
    try {
       const types = await Type.findAll({
        include: {
            model: Pokemon, 
            attributes: ["id", "name"]},
       });
       return res.json(types)
       
    } catch (error) {
       res.status(404).send('failure to load types')
       
    }
     });

module.exports = router;