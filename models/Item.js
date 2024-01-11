const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema(
    {
        id: mongoose.ObjectId,
        collectionId: String,
        collectionTitle: String,
        title: String,
        description: String,
        tags: Array,
        likes: Array,
        urlImage: String,
        createdBy: String,
        userId: String,
        customFields: Array,
    },
    { timestamps: true, versionKey: false }
);

const Item = mongoose.model('items', itemsSchema);

module.exports = Item;