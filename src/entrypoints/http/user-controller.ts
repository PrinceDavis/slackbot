import { FastifyInstance } from "fastify";
import HttpStatus from "http-status";

import { ShowUsersPreferences } from "../../usecases";

async function getPreferences(req: any, reply: any): Promise<void> {
  const handler = <ShowUsersPreferences>(
    req.diContainer.resolve("showPreferences")
  );

  const { DATABASE_ERROR, SUCCESS, ERROR } = handler.events;
  handler.on(SUCCESS, (resp) => reply.send(resp));
  handler.on(DATABASE_ERROR, () =>
    reply.code(HttpStatus.NOT_FOUND).send({
      error: "DatabaseError",
      message: "The provided topic has no subscribers",
    })
  );
  handler.on(ERROR, () =>
    reply.code(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: "Internal Server Error",
      message: "The server is unable to handle this request",
    })
  );
  handler.execute();
}

export const Controller = {
  routes(fastify: FastifyInstance, _: any, done: any): void {
    fastify.get("/users/preferences", getPreferences);
    done();
  },
};
