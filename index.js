require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }));

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening port ${PORT}...`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
