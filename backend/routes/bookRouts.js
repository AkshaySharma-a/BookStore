const router = require("express").Router();

const authenticateToken = require("../middleware/auth");
const books = require("../models/books");

router.post("/add-book", authenticateToken, async (req, res) => {
  const { userId } = req.body;
  try {
    const book = new books({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });
    await book.save();
    res.status(200).json({ message: "New book is created" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/get-all-books", authenticateToken, async (req, res) => {
  try {
    // Extract user ID from req.user (set by authenticateToken)
    const allBookData = await books.find().sort({ createdAt: -1 });
    return res.status(200).json(allBookData);
  } catch (err) {
    return res.status(500).json({ message: `Server Error || ${err.message}` });
  }
});

module.exports = router;
