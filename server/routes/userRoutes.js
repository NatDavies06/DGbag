const express = require('express');
const {getUserProfile, updateUserProfile, addDiscToBag, removeDiscFromBag, getBag, getDiscsInBag} = require('../controllers/user');

router.get('/id', getUserProfile).put(updateUserProfile);
router.post('/:id/bag', addDiscToBag);
router.delete('/:id/bag', removeDiscFromBag);

module.exports = router;