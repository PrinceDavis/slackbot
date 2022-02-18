import { App } from "@slack/bolt";

import { ConfigI } from "../contracts/config";
import { Logger } from "../adapters";

interface HeimdallI {
  logger: typeof Logger;
  config: ConfigI;
}
export class Heimdall {
  logger: typeof Logger;
  config: ConfigI;
  slackApp: App;
  constructor({ config, logger }: HeimdallI) {
    this.slackApp = new App({
      signingSecret: config.slack.signingSecret,
      appToken: config.slack.appToken,
      token: config.slack.token,
      socketMode: true,
    });
    this.logger = logger;
    this.config = config;
    this.registerHandlers();
  }

  registerHandlers() {
    this.slackApp.command("/tg", async ({ command, ack, say }) => {
      try {
        console.log(command);
        await ack();
        say("Wad up buddy");
      } catch (error) {
        console.error(error);
      }
    });

    this.slackApp.command("/bot", async ({ command, ack, say }) => {
      try {
        const { text } = command;
        console.log(text);
        await ack();
        if (text === "hello") {
          say("Welcome. How are you doing?");
        } else {
          say("Sorry I don't understand the command");
        }
      } catch (error) {
        this.logger.error(error);
      }
    });
  }

  async listen(): Promise<void> {
    await this.slackApp.start(this.config.server.port);
  }
}
