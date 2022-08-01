import { Collection } from "mongodb";
import { connectToDb } from "./mongoConnection";

/**
 * Provides collection in database based upon name
 * @param collectionName MongoDB Collection Name
 * @returns Collection from Mongo
 */
const getCollection = (collectionName: string) => {
  let collection: Collection | undefined;

  return async () => {
    if (collection) return collection;

    const db = await connectToDb();

    collection = db?.collection(collectionName);
    // TODO: Error handling necessary?

    return collection;
  };
};

/**
 * Workout collection from database
 */
export const workoutCollection = getCollection("workout");
