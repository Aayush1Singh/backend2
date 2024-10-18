import connectDB from "./db/index.js";
import app from "./app.js";
connectDB()
  .then(() => {
    app.on("error", () => {
      throw new Error("error in main index");
    });

    app.listen(process.env.PORT, () => {
      console.log("listening");
    });
  })
  .catch((err) => {
    console.log("error in main index catched");
  });
