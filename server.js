const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB");

dotenv.config();

const app = express();
app.use(cors({
    origin: true,
    credentials: true
}));

// connecting to mySQL database
connectDB();

// Routes
app.use("/api/system", systemRoutes);
app.use("/api/data", dataIngestionRoutes);

// Home Route
app.get("/api", (req,res) => {
    return res.send({
        "success": true,
        "error_code": null,
        "message": "Server is Running",
        "data": "Server is Live 🎉"
    });
});

app.listen(process.env.PORT || 3001, () => {
    console.log('Server started 🎉');
})