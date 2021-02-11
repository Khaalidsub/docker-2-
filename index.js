import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://mongodb:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Cat = mongoose.model("Cat", { name: String });

const app = express();
const port = 3444;

app.get("/", async (req, res) => {
  try {
    const kitty = new Cat({ name: "Zildjian", timestamp: Date.now() });
    const result = await kitty.save();
    res.send(JSON.stringify(result));
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/getCats", async (req, res) => {
  try {
    const cats = await Cat.find({});
    res.send(JSON.stringify(cats));
  } catch (error) {
    res.send(error.message);
  }
});
app.listen(port, () => {
  console.log(`Server Listening to Port ${port}`);
});
