const Book = require("./model");

// addBook

const addBook = async (req, res) => {
  try {
        const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};


//getallbooks
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json({ message: "success", books: books });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};


//deletebookbytitle
const deleteOne = async (req, res) => {
  try {
    const deletedBook = await Book.destroy({
      where: {
        title: req.params.title
      },
    });
    res.status(202).json({message: "success", deletedBook: deletedBook});
  } catch (error) {
    res.status(500).json({message: error.message, error: error});
  }
}

//params example
const paramsExample = async (req, res) => {
  try {
    console.log("req:params: ", req.params.title);
    res.status(200).json({ message: "success", params: req.params });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};


//getBooksByGenre
const getBookByGenre = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { genre: req.params.genre }});
    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

//updateBookByAuthor
const updateBookByAuthor = async (req, res) => {
  try {
    const book = await Book.updateOne({ author: req.params.author });
    res.status(200).json({ message: "success", book: book });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error});
  }
};


module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  deleteOne: deleteOne,
  paramsExample: paramsExample,
  getBookByGenre: getBookByGenre,
  updateBookByAuthor: updateBookByAuthor,
};

