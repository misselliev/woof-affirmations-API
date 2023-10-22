import express from "express";
import affirmationRouter from "./routes/affirmation";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api", affirmationRouter);

app.get("/", (_req, res) => {
  res.status(200).send("Hello! server is running").end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
