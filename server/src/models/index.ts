import sequelize from "../config/connection.js";
import { SongFactory } from "./liked-songs.js";
import { UserFactory } from "./user.js";

const Song = SongFactory(sequelize);
const User = UserFactory(sequelize);

// User.hasMany(Song, { foreignKey: "assignedUserId" });
// Song.belongsTo(User, { foreignKey: "assignedUserId", as: "assignedUser" });

// User.belongsToMany(Song, { through: "liked_songs" });
// Song.belongsToMany(User, { through: "liked_songs" });

export { Song, User };
