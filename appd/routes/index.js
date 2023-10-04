var express = require("express");
var router = express.Router();
const { Sequelize, DataTypes } = require("sequelize");
const Op = Sequelize.Op;
const Joi = require("joi");

let nouveaumotdepasse = "password";

const sequelize = new Sequelize("HAROLD", "root", nouveaumotdepasse, {
  host: "localhost",
  dialect: "mysql",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const Message = sequelize.define("Message", {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hour: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING,
  },
});

sequelize.sync();

module.exports = Message;

connect();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ message: "Express" });
});

router.get("/messages", async function (req, res, next) {
  try {
    const messages = await Message.findAll();
    // Envoyer les messages en tant que réponse JSON
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/messages", async function (req, res, next) {
  try {
    const newMessage = await Message.create({
      text: express.text,
    });
    // Envoyer les messages en tant que réponse JSON
    res.json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
