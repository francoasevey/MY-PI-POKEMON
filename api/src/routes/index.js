const { Router } = require('express');
const PokemonsRoutes = require('./pokemons');
const TypesRoutes = require('./types');
const AbilitiesRoutes = require('./abilities');
const MovesRoutes = require('./moves');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', PokemonsRoutes);
router.use('/types', TypesRoutes);
router.use('/abilities', AbilitiesRoutes);
router.use('/moves', MovesRoutes);

module.exports = router;
