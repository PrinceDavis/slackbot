import { createContainer, asValue, asClass } from "awilix";
import { UserRepository } from "../adapters/repositories/user-repository";
import { ShowUsersPreferences } from "../usecases";
import { BotHandlers } from "./http/bot-handlers";
import { Heimdall } from "../services/heimdall";
import { database, Logger } from "../adapters";
import { UserModel } from "../adapters/models";
import { config } from "../adapters/config";
import { Server } from "./http/server";

export const diContainer = createContainer();

diContainer.register({
  showPreferences: asClass(ShowUsersPreferences).singleton(),
  userRepository: asClass(UserRepository).singleton(),
  botHandlers: asClass(BotHandlers).singleton(),
  heimdall: asClass(Heimdall).singleton(),
  server: asClass(Server).singleton(),
  userModel: asValue(UserModel),
  database: asValue(database),
  logger: asValue(Logger),
  config: asValue(config),
});
