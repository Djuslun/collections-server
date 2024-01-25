module.exports = class UserDto {
    email;
    email_verified;
    name;
    nickname;
    picture;
    role;
    sub;
    updated_at;

    constructor(model) {
        this.email = model.email;
        this.email_verified = model.email_verified;
        this.name = model.name;
        this.nickname = model.nickname || new Date();
        this.picture = model.picture;
        this.role = model.role;
        this.sub = model.user_id;
        this.updated_at = model.updated_at;
    }
};
