import { createContainer, asValue, asClass } from "awilix";
import { BotHandlers } from "./http/bot-handlers";
import { Heimdall } from "../services/heimdall";
import { database, Logger } from "../adapters";
import { config } from "../adapters/config";
import { Server } from "./http/server";

export const diContainer = createContainer();

diContainer.register({
  botHandlers: asClass(BotHandlers).singleton(),
  heimdall: asClass(Heimdall).singleton(),
  server: asClass(Server).singleton(),
  database: asValue(database),
  logger: asValue(Logger),
  config: asValue(config),
});
