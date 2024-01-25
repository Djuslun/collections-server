module.exports = class ApiError extends Error {
    status;

    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User does not authorized');
    }

    static Forbidden() {
        return new ApiError(403, 'No admin rights');
    }
};
