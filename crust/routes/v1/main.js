var router = require('express').Router();

router.get("/", function(req, res) {
    res.send("Oyster-Seed - CRUST");
});

module.exports = router;
