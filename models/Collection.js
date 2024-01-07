const mongoose = require('mongoose');

const collectionsSchema = new mongoose.Schema(
    {
        id: mongoose.ObjectId,
        title: String,
        description: String,
        collectionTheme: String,
        imageUrl: String,
        createdBy: String,
        userId: String,
        customFields: Array,
        itemCount: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true, versionKey: false }
);

const Collection = mongoose.model('collections', collectionsSchema);

module.exports = Collection;
