import fastify, { FastifyInstance } from "fastify";
import helment from "fastify-helmet";
import cors from "fastify-cors";

import { ConfigI } from "../../contracts/config";
import { Heimdall } from "../../services/heimdall";
import { diContainer } from "../di-container";
import { database, Logger } from "../../adapters";
import { registerRoutes } from "./routes";

interface ServerI {
  logger: typeof Logger;
  heimdall: Heimdall;
  config: ConfigI;
}

export class Server {
  fastify: FastifyInstance;
  logger: typeof Logger;
  heimdall: Heimdall;
  config: ConfigI;

  constructor({ config, heimdall, logger }: ServerI) {
    this.fastify = fastify({});
    this.heimdall = heimdall;
    this.logger = logger;
    this.config = config;
  }

  async configureServer(): Promise<void> {
    this.fastify.register(cors);
    this.fastify.register(helment, { contentSecurityPolicy: false });

    registerRoutes(this.fastify);
    this.fastify.addHook("onRequest", async (req: any) => {
      req.diContainer = diContainer;
    });
    const address = await this.fastify.listen(
      this.config.server.port,
      "0.0.0.0"
    );
    this.logger.info(`server listening on ${address}`);
    await this.heimdall.listen();
  }

  async start(): Promise<void> {
    await database.connect();
    await this.configureServer();
  }
}
