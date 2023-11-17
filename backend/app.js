require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/error-handler");
const notFound = require("./middlewares/not-found");
const fileUpload = require("express-fileupload");
// Routes
const student = require("./route/studentRoute");
const app = express();

//Swagger UI

//extra security packages
const cors = require("cors");
const { connect } = require("./db/connect");
app.use(cors());
const port = process.env.PORT || 8000;
app.set("trust proxy", true);
//middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(fileUpload({ useTempFiles: true }));
//routes
app.get("/", (req, res) => res.send(`School Manager API`));
//Students
app.use("/api/v1/students", student);
//not found
app.use(notFound);
//error handler
app.use(errorHandler);
const start = async () => {
  try {
    await connect();
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
