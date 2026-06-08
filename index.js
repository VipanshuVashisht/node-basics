require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db")
const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares"); //only import logReqRes from middleware file

const app = express();

connectDB();

app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});
