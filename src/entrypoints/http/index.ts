import { diContainer } from "../di-container";
import { Logger } from "../../adapters";
import { Server } from "./server";

const server = <Server>diContainer.resolve("server");
const logger = <typeof Logger>diContainer.resolve("logger");

async function start(): Promise<void> {
  try {
    await server.start();
  } catch (ex) {
    logger.info("Could not start server");
    logger.error(ex);
    process.exit(1);
  }
}

start();
