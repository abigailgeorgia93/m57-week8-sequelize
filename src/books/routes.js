const { Router } = require("express");
const bookRouter = Router();

const { addBook } = require("./controllers");


//addBooks
bookRouter.get("/books/addBook", addBook);

// getAllBooks
bookRouter.get("/books/addBook", addBook);

// deleteBookbyTitle
bookRouter.get("/books/deleteTitle", deleteTitle);

// updateBookAuthor
bookRouter.put("/books/updateBookByAuthor", updateBookByAuthor);

//paramsExample
bookRouter.get("books/paramsexample/:example", paramsExample);

module.exports = bookRouter;