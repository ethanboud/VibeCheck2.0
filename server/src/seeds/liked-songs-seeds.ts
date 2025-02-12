import { Song } from "../models/index.js";

export const seedSongs = async () => {
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
};
