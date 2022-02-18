import { ConfigI } from "../../contracts/config";
import { db, server, slack } from "./components";

export const config: ConfigI = {
  server,
  slack,
  db,
};
