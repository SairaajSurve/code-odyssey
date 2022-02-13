const express = require('express');
const router = express.Router();
const {
    addGuide,
    loginGuide,
    updateGuide,
    deleteGuide,
    addUser,
    loginUser,
    updateUser,
    deleteUser,
    getGuide,
} = require('../controller/controllers')

const {jwtauth} = require('../middleware/auth')

router.route('/register/guide').post(addGuide).patch(updateGuide).delete(deleteGuide);
router.route('/login/guide/').get(loginGuide);
router.route('/register/user').post(addUser).patch(updateUser).delete(deleteUser);
router.route('/login/user').get(loginUser);
// router.route('/api/city/:id').get(getCity);
router.route('/api/guide/').get(getGuide);

module.exports = {
    router
}