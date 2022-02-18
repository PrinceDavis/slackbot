// import { TopicRepository } from "../adapters/repositories";
import { createContainer, asValue, asClass } from "awilix";
// import { RegisterSubscriber } from "../usecases";
// import { TopicModel } from "../adapters/models";
import { Heimdall } from "../services/heimdall";
import { config } from "../adapters/config";
import { database, Logger } from "../adapters";
import { Server } from "./http/server";

export const diContainer = createContainer();

diContainer.register({
  // registerSubscriber: asClass(RegisterSubscriber).singleton(),
  // topicRepository: asClass(TopicRepository).singleton(),
  heimdall: asClass(Heimdall).singleton(),
  server: asClass(Server).singleton(),
  // topicModel: asValue(TopicModel),
  database: asValue(database),
  logger: asValue(Logger),
  config: asValue(config),
});
