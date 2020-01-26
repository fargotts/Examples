const router = require('express').Router();

router.get('/', (req, res) => {
    res.send("Index Hi");
})

module.exports = router;