const router = require('express').Router();
const userRoutes = require('./api/inputs');

ROUTES
router.use('/inputs', userRoutes);

module.exports = router;