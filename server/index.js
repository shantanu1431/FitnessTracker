import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import UserRoutes from "./routes/User.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || " SOmething went wrong";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "Hello Shantanu",
    });
});



const connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log("Connected to Mongo DB"))
        .catch((err) => {
            console.error("failed to connect with mongo");
            console.error(err);
        });
};

const startServer = async () => {
    try {
        connectDB();
        app.listen(8080, () => console.log("Server running at port 8080"));
    } catch (err) {
        console.log(err);
    }
}


startServer();