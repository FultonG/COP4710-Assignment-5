const router = require("express").Router();
const authorRoute = require('./author');
const bookRoute = require('./book');


router.use("/author", authorRoute);
router.use("/book", bookRoute);

module.exports = router;