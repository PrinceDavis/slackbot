export interface ServerI {
  port: number;
  type: string;
  env: string;
}

export interface DBI {
  mongodbUrl: string;
  redisUrl: string;
}

export interface SlackI {
  signingSecret: string;
  appToken: string;
  token: string;
}

export interface ConfigI {
  server: ServerI;
  slack: SlackI;
  db: DBI;
}
