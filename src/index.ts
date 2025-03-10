import express from "express";
import { router } from "./routes/router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(3000, async () => {
  console.log("Running on 3000");
});
