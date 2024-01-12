require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collectionRouter = require('./router/collectionRouter');
const itemRouter = require('./router/itemRouter');
const tagRouter = require('./router/tagRouter');
const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use('/collections', collectionRouter);
app.use('/items', itemRouter);
app.use('/tags', tagRouter);

const start = async () => {
    try {
        await mongoose.connect(DB_URL);

        app.listen(PORT, () => {
            console.log(`Server listening port ${PORT}...`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
