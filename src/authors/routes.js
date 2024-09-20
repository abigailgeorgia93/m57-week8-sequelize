const express = require("express");
const {
  addAuthor,
} = require("./controllers");

const router = express.Router();

router.post("/authors", addAuthor);