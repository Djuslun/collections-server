const { ManagementClient } = require('auth0');
const UserDto = require('../dtos/user-dto');

const auth0 = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users update:users read:roles read:role_members',
});

class UserService {
    async getUsers() {
        const users = await auth0.users.getAll();
        const usersWithRoles = await Promise.all(
            users.data.map(async (user) => ({
                ...user,
                role: await this.getUserRoles(user.user_id),
            }))
        );
        return usersWithRoles.map((user) => new UserDto(user));
    }

    async getUser(userId) {
        const user = (await auth0.users.get({ id: userId })).data;
        const userRoles = await this.getUserRoles(user.user_id);
        return new UserDto({ ...user, role: userRoles });
    }

    async assignRolesAdmin(userId) {
        return await auth0.users.assignRoles(
            { id: userId },
            { roles: [`${process.env.AUTH_ADMIN_ROLE_ID}`] }
        );
    }

    async deleteRolesAdmin(userId) {
        return await auth0.users.deleteRoles(
            { id: userId },
            { roles: [`${process.env.AUTH_ADMIN_ROLE_ID}`] }
        );
    }

    async getUserRoles(userId) {
        const roles = await auth0.users.getRoles({ id: userId });
        return roles.data.map((role) => role.name);
    }
}

module.exports = new UserService();
