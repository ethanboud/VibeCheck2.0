import { User } from '../models/index.js';

export const seedUsers = async () => {
  await User.bulkCreate(
    [
      { userName: 'DEV', password: 'asdf' },
      { userName: 'sam', password: 'asdf' },
      { userName: 'carla', password: 'asdf' },
      { userName: 'test', password: 'asdf' },
      { userName: 'steve', password: 'asdf' }
    ],
    { individualHooks: true }
  );
};