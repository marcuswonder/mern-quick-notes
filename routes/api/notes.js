const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.get('/', notesCtrl.index)
router.post('/new', notesCtrl.create)
router.get('/:id', notesCtrl.show)

module.exports = router