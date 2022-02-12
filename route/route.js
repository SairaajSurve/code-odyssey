const express = require('express');
const router = express.Router();
const {
    addGuide,
    loginGuide,
    addUser,
    loginUser,
    getGuide,
    getCity
} = require('../controller/controllers')

router.route('/register/guide').post(addGuide);
router.route('/login/guide/').get(loginGuide);
router.route('/register/user').post(addUser);
router.route('/login/user').get(loginUser);
router.route('/api/city/:id').get(getCity);
router.route('/api/guide/:id').get(getGuide);

module.exports = {
    router
}