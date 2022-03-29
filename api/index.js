const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, async (err) => {
      if (err) throw err;
      console.log("conncted to db");
    });
  } catch (error) {
    console.log("cant connect");
  }
};
connectDB();

app.use(express.json());
app.use(cors());

route(app);

app.listen(8800, () => {
  console.log("server is running on port 8800");
});
