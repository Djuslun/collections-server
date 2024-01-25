const express = require('express');
const router = express.Router();
const { getSearchItems } = require('../servises/searchServise');

router.get('/:query', async (req, res, next) => {
    try {
        const searchItems = await getSearchItems(req.params.query);
        res.json(searchItems);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
