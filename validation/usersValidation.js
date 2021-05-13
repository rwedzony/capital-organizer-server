const {check} = require("express-validator")

module.exports.users_post_create_validation = () =>{
    return [ 
        check("name")
            .trim()
            .notEmpty()
            .isLength({min: 5}),
        check("password")
            .trim()
            .notEmpty()
            .isLength({min: 8}),
        check("email")
            .trim()
            .notEmpty()
    ]
}