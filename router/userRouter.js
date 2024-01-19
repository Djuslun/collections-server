const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.get('/roles/:userId', userController.getUserRoles);
router.get('/roles/:userId/assignAdmin', userController.assignRolesAdmin);
router.get('/roles/:userId/deleteAdmin', userController.deleteRolesAdmin);

module.exports = router;
