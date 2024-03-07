const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('서버가 열리고 동작중임!!!');
});

module.exports = router;