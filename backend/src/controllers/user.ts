import db from "../db/utils";

const createUser = async (id: number, email: string, display_name: string) => {
  try {
    await db.insert("users", { id, email, display_name });
  } catch (error) {
    throw new Error("failed to create a new user");
  }
};

const getUsers = async () => {
  try {
    const { rows } = await db.getAll("users");
    return rows;
  } catch (error) {
    throw new Error("failed to get all users");
  }
};

export default { createUser, getUsers };
