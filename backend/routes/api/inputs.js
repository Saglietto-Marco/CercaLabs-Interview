const router = require('express').Router();
const inputController = require('../../controllers/inputController');

// '/api/inputs'
router.route('/')
  .post(inputController.reverseString);

router.route('/URL')
  .post(inputController.URLRequest);

module.exports = router;