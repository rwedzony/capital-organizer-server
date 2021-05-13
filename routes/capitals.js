const express = require('express')
const {post_add_capital, get_capitals, get_capital, put_edit_capital} = require('../controllers/capital')

const router = express.Router()

// router.put('/',put_add_funds)
router.post('/', post_add_capital)

router.get('/', get_capitals)

router.get('/:id', get_capital)

router.put('/:id', put_edit_capital)

module.exports = router