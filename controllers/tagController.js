const tagService = require('../servises/tagService');

class TagController {
    async createTag(req, res, next) {
        try {
            const newTags = await tagService.createTag(req.body);
            res.json(newTags);
        } catch (e) {
            next(e);
        }
    }

    async getAllTags(req, res, next) {
        try {
            const allTags = await tagService.getAllTags();
            res.json(allTags);
        } catch (e) {
            next(e);
        }
    }

    async getTagById(req, res, next) {
        try {
            const tag = await tagService.getTagById(req.params.id);
            res.json(tag);
        } catch (e) {
            next(e);
        }
    }

    async getTagByIdsArray(req, res, next) {
        try {
            const idsArray = req.body;
            const tagsFromItem = await tagService.getTagByIdsArray(idsArray);
            res.json(tagsFromItem);
        } catch (e) {
            next(e);
        }
    }

    async deleteTag(req, res, next) {
        try {
            const deletedTag = await tagService.deleteTag(req.params.id);
            res.json(deletedTag);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TagController();
