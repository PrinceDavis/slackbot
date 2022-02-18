import joi from "joi";

import { SlackI } from "../../../contracts/config";

const schema = joi
  .object({
    SLACK_SIGNING_SECRET: joi.string().required(),
    SLACK_APP_TOKEN: joi.string().required(),
    SLACK_TOKEN: joi.string().required(),
  })
  .unknown()
  .required();

const { error, value } = schema.validate(process.env);

if (error) throw new Error(`Config validation failed ${error.message}`);

export const slack: SlackI = {
  signingSecret: value.SLACK_SIGNING_SECRET,
  appToken: value.SLACK_APP_TOKEN,
  token: value.SLACK_TOKEN,
};
