import express from "express";
import affirmationRouter from "./routes/affirmation";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", affirmationRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
