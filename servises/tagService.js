const Tag = require('../models/Tag');

class TagService {
    async createTag(tags) {
        const newTags = Promise.all(
            tags.map(async (tag) => await new Tag({ value: tag, label: tag }).save())
        );
        return newTags;
    }

    async getAllTags() {
        const allTags = await Tag.find();
        return allTags;
    }

    async getTagById(id) {
        const tag = await Tag.findById(`${id}`);
        return tag;
    }

    async getTagByIdsArray(ids) {
        const tags = await Tag.find({ _id: { $in: ids } });
        return tags;
    }

    async deleteTag(id) {
        const deletedTag = await Tag.findByIdAndDelete(id);
        return deletedTag;
    }
}

module.exports = new TagService();
