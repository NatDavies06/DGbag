const express = require('express');
const { createDisc, getDiscs, getDisc, updateDisc, deleteDisc } = require('../controllers/disc');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.get('/', getDiscs);
const get('/:id').get(getDisc).put(protect, updateDisc).delete(protect, deleteDisc);

module.exports = router;