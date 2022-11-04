const { Router } = require('express');
const PokemonsRoutes = require('./pokemons');
const TypesRoutes = require('./types');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonsRoutes);
router.use('/types', TypesRoutes);

module.exports = router;
