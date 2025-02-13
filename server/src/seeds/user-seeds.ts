import { User } from "../models/index.js";

export const seedUsers = async () => {
  await User.bulkCreate(
    [
<<<<<<< HEAD
      { userName: 'DEV', password: 'asdf' },
      { userName: 'sam', password: 'asdf' },
      { userName: 'carla', password: 'asdf' },
      { userName: 'test', password: 'asdf' },
      { userName: 'steve', password: 'asdf' }
=======
      { userName: "DEV", password: "asdf" },
      { userName: "Mixxuhh", password: "bootcamp" },
>>>>>>> ab7f7abaab63883d14860675c3050222f8e1f64a
    ],
    { individualHooks: true }
  );
};
