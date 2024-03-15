import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    const PORT = process.env.PORT;
    app.listen(PORT || 8000, () => {
      console.log(`Server listening at PORT : ${PORT}`);
    });
  })
  .catch((error) => console.log("MongoDB connection Failied !!! ", error));
