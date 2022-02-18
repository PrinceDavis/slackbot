import { model, Schema, Model, Document } from "mongoose";

const schema: Schema = new Schema({
  updatedAt: { type: Date, default: new Date() },
  created: { type: Date, default: new Date() },
  hobby: { type: String, required: true },
  name: { type: String, required: true },
  mood: { type: String, required: true },
});

export interface UserDocument extends Document {
  hobby: string;
  mood: string;
  name: string;
  id: string;
}

export const UserModel: Model<UserDocument> = model("topics", schema);
