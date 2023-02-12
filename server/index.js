import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import { connect } from "mongoose";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("hello from DALL-E");
});
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Listening at 8080");
    });
  } catch (error) {
    console.log(err);
  }
};
startServer();
// tiLQasgMxHgz9n7
// mongodb+srv://rg45:tiLQasgMxHgz9n7@cluster0.zzidojm.mongodb.net/?retryWrites=true&w=majority
