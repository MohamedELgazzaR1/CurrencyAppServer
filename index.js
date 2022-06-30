require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors")
const connection = require("./db")
const userRoutes = require("./routes/users")
const authRoutes = require("./routes/auth")
const favRoutes = require("./routes/fav")


connection();
app.use(express.json())
app.use(cors());

app.use("/api/users",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/fav",favRoutes)

const port = process.env.port || 8080;

app.listen(port , ()=> console.log(`Server is listening on port ${port}..`))