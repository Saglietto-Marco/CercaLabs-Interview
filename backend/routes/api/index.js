const router = require('express').Router();
const inputRoutes = require('./inputs');

// ROUTES
router.use('/inputs', inputRoutes);

router.use('/inputs/URL', inputRoutes);

module.exports = router;