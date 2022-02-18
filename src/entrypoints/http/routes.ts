import { FastifyInstance } from "fastify";

import { Controller } from "./user-controller";

export const registerRoutes = (fastify: FastifyInstance): void => {
  fastify.register(Controller.routes);
};
