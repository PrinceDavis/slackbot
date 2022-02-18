import { App } from "@slack/bolt";

import { BotHandlers } from "../entrypoints/http/bot-handlers";
import { ConfigI } from "../contracts/config";
import { Logger } from "../adapters";

interface HeimdallI {
  botHandlers: BotHandlers;
  logger: typeof Logger;
  config: ConfigI;
}
export class Heimdall {
  botHandlers: BotHandlers;
  logger: typeof Logger;
  config: ConfigI;
  slackApp: App;
  constructor({ config, logger, botHandlers }: HeimdallI) {
    this.slackApp = new App({
      signingSecret: config.slack.signingSecret,
      appToken: config.slack.appToken,
      token: config.slack.token,
      socketMode: true,
    });
    this.botHandlers = botHandlers;
    this.logger = logger;
    this.config = config;
    this.registerHandlers();
  }

  registerHandlers() {
    this.slackApp.action("hobby_selection", this.botHandlers.handleHobbies);
    this.slackApp.action("mood_selection", this.botHandlers.handleMood);
    this.slackApp.command("/bot", this.botHandlers.handleSlashBot);
  }

  async listen(): Promise<void> {
    await this.slackApp.start(this.config.server.port);
  }
}
