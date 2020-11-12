const express = require("express");
const app = express();

const database = require("./services/database");
const bookRouter = require("./routes/books");

app.use(express.json());
app.use("/api/bookstore", bookRouter);
database.connect();

app.listen(8000, console.log("Server running on port 8000"))