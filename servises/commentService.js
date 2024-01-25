const { Comment } = require('../models/Comment');

class CommentService {
    async postNewComment(item) {
        const newComment = new Comment(item);
        await newComment.save();
        return newComment;
    }

    async getCommentsByItemId(id) {
        const comments = await Comment.find({ itemId: id });
        return comments;
    }

    async deleteComment(id) {
        const deletedComment = await Comment.findByIdAndDelete(id);
        return deletedComment;
    }
}

module.exports = new CommentService();
