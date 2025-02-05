const express = require("express");
const router =  express.Router();
const { Home, Registration, Login, Logout, Contact } = require("../controller/auth-controller");
const validatemiddleware = require("../middleware/validate-middleware")
const signupSchema = require("../validator/auth-validation")

router.get("/",Home)
router.route('/register').post(validatemiddleware(signupSchema) ,Registration)
router.route('/login').post( Login)
router.route('/logout').get(Logout)
router.route('/contact').post(Contact);

module.exports = router;