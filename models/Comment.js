const mongoose = require('mongoose');

const commentsShema = new mongoose.Schema(
    {
        id: mongoose.ObjectId,
        itemId: String, //mongoose.Schema.Types.ObjectId
        userId: String,
        userName: String,
        userAvatar: String,
        comment: String,
    },
    { timestamps: true, versionKey: false }
);

const Comment = mongoose.model('comments', commentsShema);

module.exports = { Comment };
