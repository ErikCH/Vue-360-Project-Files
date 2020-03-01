import * as Express from "express";
import * as Cors from "cors";
import axios from "axios";
// const cors = require("cors");

import { checkIfAuthenticated } from "./auth.middleware";

const app = Express();
const port = 3000;
app.use(Cors());

app.get("/", (_: any, res: any) => {
  return res.send("Hello World!");
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
