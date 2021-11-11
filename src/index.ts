import Express from "express";
import cors from "cors";
import { usersList } from "./users";

const app = Express();

app.use(cors());

app.get("/api/users", (req, res) => {
  usersList.map((atlec) => console.log(atlec.role));
  return res.send(usersList);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`runnig in port!!!! ${PORT}👍`));
