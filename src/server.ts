import express from "express";
import affirmationRouter from "./routes/affirmation";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/api", affirmationRouter);

app.get("/", (_req, res) => {
  res.status(200).send("Hello! server is running").end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
