const ApiError = require('../errors/error');
const userService = require('../servises/userService');

module.exports = async function (req, res, next) {
    try {
        const user = await userService.getUser(req.auth.sub);

        if (!user) {
            return next(ApiError.UnauthorizedError());
        }

        req.auth = user;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};
