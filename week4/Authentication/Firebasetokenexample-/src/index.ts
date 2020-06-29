import * as Express from "express";
import * as Cors from "cors";
import axios from "axios";
var morgan = require("morgan");

// const cors = require("cors");

import { checkIfAuthenticated } from "./auth.middleware";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(morgan("combined"));
const port = 3000;
app.use(Cors());

function mid(req: any, _: any, next: any) {
  console.log("got back params" + JSON.stringify(req.params));
  console.log("got back query" + JSON.stringify(req.query));
  next();
}

app.get("/", (_: any, res: any) => {
  return res.send("Hello World!");
});

app.post("/post", checkIfAuthenticated, (req: Express.Request, res: any) => {
  console.log(req.body);

  return res.send(req.body);
});

app.get("/test/:id", mid, (req: Express.Request, res: any) => {
  return res.send(`${req.params} ${req.query.erik}`);
});

app.get(
  "/erik",
  checkIfAuthenticated,
  async (_: any, res: Express.Response) => {
    const gotVal = await sendRequest();
    return res.json(gotVal.data);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const sendRequest = async (): Promise<any> => {
  const characters = await axios.get<[{ character: string }]>(
    "https://www.breakingbadapi.com/api/characters"
  );
  return characters;
};
