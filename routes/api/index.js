const router = require("express").Router();
const authorRoute = require('./author');


router.use("/author", authorRoute);

module.exports = router;