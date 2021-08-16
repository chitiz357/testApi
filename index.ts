import Express from "express";
import cors from "cors";
import { usersList } from "./users";


const app = Express();

app.use(cors());

app.get("/api/users", (req, res) => {
  res.send(usersList);
});

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`runnig in port!!!! ${PORT}`));
