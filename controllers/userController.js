const userService = require('../servises/userService');

class UserController {
    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getUser(req, res, next) {
        try {
            const { id } = req.params;
            const user = await userService.getUser(id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async assignRolesAdmin(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await userService.assignRolesAdmin(userId);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async deleteRolesAdmin(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await userService.deleteRolesAdmin(userId);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async getUserRoles(req, res, next) {
        try {
            const { userId } = req.params;
            const roles = await userService.getUserRoles(userId);
            res.json(roles);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
