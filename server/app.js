const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("./Inventory");
require("./User");
require("./Order");

app.use(cors());
app.use(express.json());

const Item = mongoose.model("Inventory");
const User = mongoose.model("user");
const Order = mongoose.model("order");

const mongoUrl =
  "mongodb+srv://dbUser:dbUserPassword@cluster0.kiwun.mongodb.net/WebbShop?retryWrites=true&w=majority";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo YEAH!");
});

mongoose.connection.on("error", (error) => {
  console.log("error", error);
});

app.get("/items", (req, res) => {
  Item.find({})
  .then(result => {
      res.send(result);
  })
});

app.post("/items", (req, res) => {
  const item = new Item({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  });
  item
    .save()
    .then((data) => {
      console.log(data);
      res.send({ text: "success" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/delete", (req, res) => {
  Item.findByIdAndRemove(req.body.id).then((data) => {
    console.log(data);
    res.send("deleted");
  });
});
app.listen(8080, () => {
  console.log("server running");
});