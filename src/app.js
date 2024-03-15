import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// get body data like form/json data
app.use(
  express.json({
    limit: "16kb",
  })
);

// get Url queries like q={}
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// store files in the server for public before going to DB
app.use(express.static("public"));

app.use(cookieParser());

export { app };
