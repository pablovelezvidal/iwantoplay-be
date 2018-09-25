const express = require('express');

const router = express.Router();
const cityController = require('../controllers/cityController.js');

router.use((req, res, next) => {
  next(); // make sure we go to the next routes and don't stop here
});

/*
 * GET
 */
router.get('/', cityController.list);

/*
 * GET
 */
router.get('/:id', cityController.show);

/*
 * POST
 */
router.post('/', cityController.create);

/*
 * PUT
 */
router.put('/:id', cityController.update);

/*
 * DELETE
 */
router.delete('/:id', cityController.remove);

module.exports = router;
