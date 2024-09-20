const Author = require("./model");
const Book = require("../books/model");

//addAnAuthor
const addAuthor = async (req, res) => {
    try {
        const author = await Author.create({
            name: req.body.name,
        });
        res.status(201).json({ message: "success", author });
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

//getauthorandbooks
const getAuthorAndBooks = async (req, res) => {
    const author = await Author.findOne({
        where: {
            name: req.params.name,
        },
        include: Book,
    });
    res.status(200).json({ message: "success", author: author });
};

module.exports = {
    addAuthor: addAuthor,
    getAuthorAndBooks: getAuthorAndBooks,
};