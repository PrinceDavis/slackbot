import { UserDocument, UserModel } from "../models";

interface UserObj {
  user_id: string;
  hobby?: string;
  name: string;
  mood?: string;
}

export class DatabaseError extends Error {
  date: Date;
  constructor(params: string) {
    super(params);
    this.name = "DatabaseError";
    this.date = new Date();
  }
}
export interface UserRepositoryI {
  add(input: UserObj): Promise<UserDocument>;
  all(): Promise<UserDocument[]>;
}
export class UserRepository implements UserRepositoryI {
  private model: typeof UserModel;

  constructor({ userModel }: { userModel: typeof UserModel }) {
    this.model = userModel;
  }

  async add(input: UserObj): Promise<UserDocument> {
    try {
      const user = await this.model.findOne({ user_id: input.user_id });
      if (user) {
        return user;
      } else {
        return await this.model.create(input);
      }
    } catch (ex: any) {
      const error = new DatabaseError(ex.message);
      throw error;
    }
  }

  async updateHobby(id: string, hobby: string): Promise<UserDocument | null> {
    return this.update(id, { hobby });
  }

  async updateMood(id: string, hobby: string): Promise<UserDocument | null> {
    return this.update(id, { hobby });
  }

  async update(id: string, object: { hobby?: string; mood?: string }) {
    try {
      return this.model.findOneAndUpdate({ user_id: id }, object, {
        new: true,
      });
    } catch (ex: any) {
      const error = new DatabaseError(ex.message);
      throw error;
    }
  }

  async all(): Promise<UserDocument[]> {
    return this.model.find();
  }
}
