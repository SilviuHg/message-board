const express = require("express");
const db = require("../db/queries");

const router = express.Router();

// Render the messages board
router.get("/", async (req, res) => {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

// Render the message form
router.get("/new", (req, res) => {
  res.render("form");
});

// Create new message
router.post("/new", async (req, res) => {
  await db.insertMessage(req.body.author, req.body.message, new Date());
  res.redirect("/");
});

// View each message individually
router.get("/message/:id", async (req, res) => {
  const message = await db.getMessageById(req.params.id);
  res.render("message", { message: message[0] });
});

module.exports = router;
