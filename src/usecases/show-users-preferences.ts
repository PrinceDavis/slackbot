import { UserRepositoryI, DatabaseError } from "../adapters/repositories";
import { Logger } from "../adapters/logger";
import { UseCase } from "./usecase";

interface ArgsI {
  userRepository: UserRepositoryI;
  logger: typeof Logger;
}

export class ShowUsersPreferences extends UseCase {
  private repository: UserRepositoryI;
  private logger: typeof Logger;

  constructor({ userRepository, logger }: ArgsI) {
    super();
    this.repository = userRepository;
    this.logger = logger;
  }

  async execute(): Promise<void> {
    const { SUCCESS, ERROR, DATABASE_ERROR } = this.events;
    try {
      const allUsers = await this.repository.all();
      this.emit(SUCCESS, allUsers);
    } catch (ex) {
      this.logger.error(ex);
      if (ex instanceof DatabaseError) {
        this.emit(DATABASE_ERROR, ex);
      } else {
        this.emit(ERROR, ex);
      }
    }
  }
}

ShowUsersPreferences.setEvents(["DATABASE_ERROR", "SUCCESS", "ERROR"]);
