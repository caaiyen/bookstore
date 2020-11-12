const { replaceOne } = require("../models/book");
const Book = require("../models/book");
const parseRequestBody = require("../utils/parseRequestBody")

const getBook = async(req, res) => {
    try {
        const books = await Book.find();
        if (!books) {
            return res.status(400).json({ error: "Error in getting Books" });
        }

        res.status(200).json({
            books: books,
        });
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
};

const getBookById = async(req, res) => {
    try {
        const book = await Book.find({ _id: req.params.id });
        if (!book || book.length === 0) {
            return res.status(400).json({ error: "Book not Found!" })
        }

        res.status(200).json({
            book: book
        })
    } catch (e) {
        return res.status(400).json({
            error: e,
        });
    }
}

const addBook = async(req, res) => {
    try {
        const book = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            yearPublished: req.body.yearPublished,
            price: req.body.price
        }

        const newBook = new Book(book);
        const result = await newBook.save();

        if (!result) {
            return res.status(400).json({ error: "Error in adding a book" })
        }

        res.status(200).json({ message: "New Book Added" })
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

const updateBook = async(req, res) => {
    const updates = parseRequestBody(req.body);
    try {
        const result = await Book.updateOne({ _id: req.params.id }, { $set: updates });
        if (!result) {
            return res.status(400).json({ error: "Error in updating book" })
        }
        res.status(200).json({
            result: result
        })
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}

const deleteBook = async(req, res) => {
    try {
        const result = await Book.deleteOne({ _id: req.params.id })
        if (!result) {
            return res.status(400).json({ error: "Error in deleting book" })
        }

        res.status(200).json({
            result: result
        })
    } catch (e) {
        return res.status(400).json({ error: e })
    }
}
module.exports = { getBook, getBookById, addBook, updateBook, deleteBook };