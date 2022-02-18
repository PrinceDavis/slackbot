import { Logger } from "../../adapters";
import { UserRepository } from "../../adapters/repositories/user-repository";
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

interface BotHandlersI {
  userRepository: UserRepository;
  logger: typeof Logger;
}

export class BotHandlers {
  userRepository: UserRepository;
  logger: typeof Logger;
  constructor({ userRepository, logger }: BotHandlersI) {
    this.userRepository = userRepository;
    this.logger = logger;
  }

  async handleSlashBot({ command, ack, say }: CommmandI): Promise<void> {
    try {
      const { text } = command;
      await ack();
      if (text === "hello") {
        const userData = {
          user_id: <string>command.user_id,
          name: <string>command.user_name,
        };
        await this.userRepository.add(userData);
        await say({
          blocks: blocks.moodBlock,
        });
      } else {
        say("Sorry I don't understand the command");
      }
    } catch (error) {
      this.logger.error(error);
    }
  }

  async handleMood({ body, ack, say }: ActionI): Promise<void> {
    try {
      const mood = body.actions[0].selected_option.value;
      const userId = body.user.id;
      await this.userRepository.updateMood(userId, mood);
      await ack();
      await say({
        blocks: blocks.hobbyBlock,
      });
    } catch (ex) {
      this.logger.error(ex);
    }
  }

  async handleHobbies({ body, ack, say }: ActionI): Promise<void> {
    try {
      const mood = body.actions[0].selected_option.value;
      const userId = body.user.id;
      await this.userRepository.updateHobby(userId, mood);
      await ack();
      await say("thank you");
    } catch (ex) {
      this.logger.error(ex);
    }
  }
}
