import { User } from "../models/index.js";

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { userName: "DEV", password: "asdf" },
      { userName: "Mixxuhh", password: "bootcamp" },
    ],
    { individualHooks: true }
  );
};
