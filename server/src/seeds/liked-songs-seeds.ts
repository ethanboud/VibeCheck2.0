import { Song } from "../models/index.js";

export const seedSongs = async () => {
<<<<<<< HEAD
  await Song.bulkCreate(
    [
      { title: 'Never Gonna Give You Up', artist: 'Rick Astley', assignedUserId: 1 },
      { title: 'samplesong1', artist: 'sample artist', assignedUserId: 2 },
      { title: 'samplesong2', artist: 'sample artist', assignedUserId: 3 },
      { title: 'samplesong3', artist: 'sample artist', assignedUserId: 4 },
      { title: 'samplesong4', artist: 'sample artist', assignedUserId: 5 }
    ]);
=======
  await Song.bulkCreate([
    {
      title: "Never Gonna Give You Up",
      artist: "Rick Astley",
      assignedUserId: "DEV",
    },
    {
      title: "Kickstart My Heart",
      artist: "Motley Crue",
      assignedUserId: "DEV",
    },
    {
      title: "Genesis",
      artist: "Grimes",
      assignedUserId: "DEV",
    },
    { title: "HeartBreaks2005", artist: "Dusqk", assignedUserId: "Mixxuhh" },

    { title: "Dark Red", artist: "Steve Lacy", assignedUserId: "Mixxuhh" },
    {
      title: "Gallowdance",
      artist: "Lebanon Hanover",
      assignedUserId: "Mixxuhh",
    },
    { title: "01", artist: "QUEEN BEE", assignedUserId: "Mixxuhh" },
    { title: "Watch This", artist: "Lil Uzi Vert", assignedUserId: "Mixxuhh" },
    { title: "#BrooklynBloodPop", artist: "SyKo", assignedUserId: "Mixxuhh" },
  ]);
>>>>>>> ab7f7abaab63883d14860675c3050222f8e1f64a
};
