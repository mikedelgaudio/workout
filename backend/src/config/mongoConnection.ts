import { Db, MongoClient } from "mongodb";

let _connection: MongoClient | undefined;
let _db: Db | undefined;

// TODO: Consider error handling if connection fails, throw up to frontend?

export const connectToDb = async (): Promise<Db | undefined> => {
  if (!_connection) {
    _connection = await MongoClient.connect(
      process.env.DATABASE_URL ?? "mongodb://localhost:27017/"
    );
    _db = _connection.db(process.env.DATABASE_NAME ?? "Workout_DB");
  }
  return _db;
};

export const closeConnection = async (): Promise<void> => {
  if (!_connection) return;
  await _connection.close();
};
