const commentService = require('../servises/commentService');
const { ObjectId } = require('mongodb');

class CommentController {
    async postNewComment(req, res, next) {
        try {
            const newComment = await commentService.postNewComment(req.body);
            res.json(newComment);
        } catch (e) {
            next(e);
        }
    }

    async getCommentsByItemId(req, res, next) {
        try {
            const itemId = req.params.id;
            const comments = await commentService.getCommentsByItemId(itemId);
            res.json(comments);
        } catch (e) {
            next(e);
        }
    }

    async deleteComment(req, res, next) {
        try {
            const commentId = req.params.id;
            const deletedComment = await commentService.deleteComment(commentId);
            res.json(deletedComment);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CommentController();
