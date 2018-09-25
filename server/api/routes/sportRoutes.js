const express = require('express');

const router = express.Router();
const sportController = require('../controllers/sportController.js');

router.use((req, res, next) => {
  next(); // make sure we go to the next routes and don't stop here
});

/*
 * GET
 */
router.get('/', sportController.list);

/*
 * GET
 */
router.get('/:id', sportController.show);

/*
 * POST
 */
router.post('/', sportController.create);

/*
 * PUT
 */
router.put('/:id', sportController.update);

/*
 * DELETE
 */
router.delete('/:id', sportController.remove);

module.exports = router;
