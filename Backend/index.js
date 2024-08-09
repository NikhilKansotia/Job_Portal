import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRotue from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
``;
const app = express();

dotenv.config();
connectDB();
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOption));

//api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRotue);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

const PORT = process.env.PORT_NO || 1111;
app.listen(PORT, () => {
  console.log(`Listening to PORT NO ${PORT} `);
});
