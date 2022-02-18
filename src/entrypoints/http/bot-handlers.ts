import { Logger } from "../../adapters";
import { blocks } from "./slack-blocks";

interface CommmandI {
  command: any;
  ack: any;
  say: any;
}

interface ActionI {
  body: any;
  ack: any;
  say: any;
}

export class BotHandlers {
  async handleSlashBot({ command, ack, say }: CommmandI): Promise<void> {
    try {
      const { text } = command;
      await ack();
      if (text === "hello") {
        await say({
          blocks: blocks.moodBlock,
        });
      } else {
        say("Sorry I don't understand the command");
      }
    } catch (error) {
      Logger.error(error);
    }
  }

  async handleMood({ body, ack, say }: ActionI): Promise<void> {
    try {
      console.log(body.actions);
      // save user selection
      await ack();
      await say({
        blocks: blocks.hobbyBlock,
      });
    } catch (ex) {
      Logger.error(ex);
    }
  }

  async handleHobbies({ body, ack, say }: ActionI): Promise<void> {
    try {
      console.log(body.actions);
      // save user selection
      await ack();
      await say("thank you");
    } catch (ex) {
      Logger.error(ex);
    }
  }
}
