const userService = require('../servises/userService');
const ApiError = require('../errors/error');

class UserController {
    async getUsers(req, res, next) {
        console.log(req.auth);
        const roles = await userService.getUserRoles(req.auth.sub);
        try {
            if (!roles.includes('Admin')) {
                return next(ApiError.Forbidden());
            }
            const users = await userService.getUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getUser(req, res, next) {
        const roles = await userService.getUserRoles(req.auth.sub);
        try {
            if (!roles.includes('Admin')) {
                return next(ApiError.Forbidden());
            }
            const { id } = req.params;
            const user = await userService.getUser(id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async assignRolesAdmin(req, res, next) {
        try {
            const roles = await userService.getUserRoles(req.auth.sub);
            if (!roles.includes('Admin')) {
                return next(ApiError.Forbidden());
            }
            const userIds = req.body;
            const user = await userService.assignRolesAdmin(userIds);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async deleteRolesAdmin(req, res, next) {
        try {
            const roles = await userService.getUserRoles(req.auth.sub);

            if (!roles.includes('Admin')) {
                return next(ApiError.Forbidden());
            }
            const userIds = req.body;
            const user = await userService.deleteRolesAdmin(userIds);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async deleteUsers(req, res, next) {
        try {
            const roles = await userService.getUserRoles(req.auth.sub);
            if (!roles.includes('Admin')) {
                return next(ApiError.Forbidden());
            }

            const userIds = req.body;
            const user = await userService.deleteUsers(userIds);
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
