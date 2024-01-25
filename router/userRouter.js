const express = require('express');
const router = express.Router();
const { checkJwt } = require('../auth0/jwtChecker');
const userController = require('../controllers/userController');
const authMiddleWare = require('../middlewares/auth-middleware');

router.get('/', checkJwt, authMiddleWare, userController.getUsers);
router.get('/:id', checkJwt, authMiddleWare, userController.getUser);
router.get('/roles/:userId', checkJwt, authMiddleWare, userController.getUserRoles);
router.post(
    '/roles/assignAdmin',
    checkJwt,
    authMiddleWare,
    userController.assignRolesAdmin
);
router.post(
    '/roles/deleteAdmin',
    checkJwt,
    authMiddleWare,
    userController.deleteRolesAdmin
);
router.delete('/delete', checkJwt, authMiddleWare, userController.deleteUsers);

module.exports = router;
