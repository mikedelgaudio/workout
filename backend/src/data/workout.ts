import { workoutCollection } from "../config/mongoCollections";

const create = async (name: string) => {
  if (!name) return;

  const collection = await workoutCollection();

  const insertedWorkout = await collection?.insertOne({ name });

  if (!insertedWorkout || !insertedWorkout.acknowledged)
    throw new Error("Unable to add new workout");

  const insertedWorkoutId = insertedWorkout.insertedId;

  return insertedWorkoutId;
};

export const workoutData = {
  create,
};
