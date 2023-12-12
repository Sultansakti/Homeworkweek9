const express = require('express')
const router = express.Router()
const MovieController = require('../controller/movie_controller')

router.get('/', MovieController.getAll)
router.get('/:id', MovieController.getOne)
router.post('/', MovieController.create)
router.put('/:id', MovieController.update)
router.delete('/:id', MovieController.delete)

module.exports = router;