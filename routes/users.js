const express = require('express')
const {get_users_one, get_users_all, post_users_create, users_login} = require('../controllers/users')
const { users_post_create_validation } = require('../validation/usersValidation')

const router = express.Router()

router.get('/', get_users_all)

router.get('/:id',get_users_one)

router.post('/sesion',users_login)

router.post('/',
    users_post_create_validation(),
    post_users_create
)

// router.put('/',)

// router.delete('/:id',)

module.exports = router