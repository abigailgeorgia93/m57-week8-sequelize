const Book = require("./model");

// addBook

const addBook = async (req, res) => {
  try {
    // try the thing
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });

    res.status(201).json({ message: "success", book: book });
  } catch (error) {
    // if error then does something
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
        title: 'harry potter'
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


//updatebookbyauthor


module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
  bringMeAllTheBooks: bringMeAllTheBooks,
  paramsExample: paramsExample,
  deleteOne: deleteOne,
};

