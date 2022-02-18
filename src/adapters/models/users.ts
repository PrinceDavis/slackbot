import { model, Schema, Model, Document } from "mongoose";

const schema: Schema = new Schema({
  updatedAt: { type: Date, default: new Date() },
  created: { type: Date, default: new Date() },
  user_id: { type: String, required: true },
  name: { type: String, required: true },
  hobby: { type: String },
  mood: { type: String },
});

export interface UserDocument extends Document {
  user_id: string;
  hobby: string;
  mood: string;
  name: string;
  id: string;
}

export const UserModel: Model<UserDocument> = model("topics", schema);
