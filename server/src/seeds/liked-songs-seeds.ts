import { Song } from '../models/index.js';

export const seedSongs = async () => {
  await Song.bulkCreate(
    [
      { title: 'Never Gonna Give You Up', artist: 'Rick Astley', assignedUserId: 1 },
      { title: 'samplesong1', artist: 'sample artist', assignedUserId: 2 },
      { title: 'samplesong2', artist: 'sample artist', assignedUserId: 3 },
      { title: 'samplesong3', artist: 'sample artist', assignedUserId: 4 },
      { title: 'samplesong4', artist: 'sample artist', assignedUserId: 5 }
    ]);
};
