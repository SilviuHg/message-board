const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

let nextId = 3;

// Render the messages board
router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Render the message form
router.get("/new", (req, res) => {
  res.render("form");
});

// Create new message
router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
    id: nextId++,
  });
  res.redirect("/");
});

// View each message individually
router.get("/message/:id", (req, res) => {
  const message = messages.find(
    (message) => message.id === parseInt(req.params.id)
  );
  res.render("message", { message: message });
});

module.exports = router;
