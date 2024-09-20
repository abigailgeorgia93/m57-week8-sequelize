const Author = require("./model");

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