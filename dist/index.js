"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./users");
const app = express_1.default();
app.use(cors_1.default());
app.get("/api/users", (req, res) => {
    users_1.usersList.map((atlec) => console.log(atlec.role));
    return res.send(users_1.usersList);
});
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`runnig in port!!!! ${PORT}👍`));
