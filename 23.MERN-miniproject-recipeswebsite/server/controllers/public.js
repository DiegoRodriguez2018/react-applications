const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    return res.send('api working');
});

module.exports=router;
