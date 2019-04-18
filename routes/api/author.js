const router = require('express').Router();
const authors = require("../../controllers/authors.js");


router.get("/", (req, res) => {
    authors.getAllAuthors((status, data = "ok") => res.status(status).send(data));
});

router.get("/:name", (req, res) => {
    authors.getAuthor(req.params.name, (status, data = "ok") => res.status(status).send(data));
});

router.put("/", (req, res) => {
    authors.createAuthor(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.post("/", (req, res) => {
    authors.updateAuthor(req.body, (status, data = "ok") => res.status(status).send(data));
});

router.delete("/:name", (req, res) => {
    authors.deleteAuthor(req.params.name, (status, data = "ok") => res.status(status).send(data));
});

module.exports = router;