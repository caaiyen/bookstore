const express = require("express");
const router = express.Router();

const {
    getBook,
    getBookById,
    addBook,
    deleteBook,
    updateBook
} = require("../controllers/bookController");

router.post("/", addBook);
router.get("/books", getBook);
router.get("/books/:id", getBookById);
router.patch("/:id", updateBook);
router.delete("/:id", deleteBook);
module.exports = router;