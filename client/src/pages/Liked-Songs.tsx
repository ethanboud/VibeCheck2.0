import { useEffect, useState } from "react";
import { getSongs } from "../api/liked-songsAPI";
import { Songs } from "../interfaces/Songs";
import AuthService from "../utils/auth.js";

const LikedSongs: React.FC = () => {
  const [likedSongs, setLikedSongs] = useState<Songs[]>([]);

  useEffect(() => {
    const auth = AuthService.getProfile();
    console.log(auth.userName);

    const fetchSongs = async () => {
      const songs = await getSongs();
      console.log(songs);

      // const validSongs = songs.filter((song) => song.id !== null);
      const userSongs = songs.filter(
        (song: any) => song.assignedUserId === auth.userName
      );
      setLikedSongs(userSongs);
    };

    fetchSongs();
  }, []);

  // const handleDelete = async (songId: number) => {
  //   try {
  //     // Call to API endpoint to delete the song
  //     const response = await fetch(
  //       `http://localhost:3001/api/songs/${songId}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       // Remove the song from the state to update the UI
  //       setLikedSongs(likedSongs.filter((song) => song.id !== songId));
  //     } else {
  //       throw new Error("Failed to delete the song");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting the song:", error);
  //   }
  // };

  return (
    <div className="ls-container">
      <h1 className="ls-title">Liked Songs!</h1>

      {/* Display a message if there are no liked songs */}
      {likedSongs.length === 0 ? (
        <p className="ls-empty-message">No liked songs yet.</p>
      ) : (
        <ul className="ls-ul">
          {/* Loop through liked songs and display each one */}
          {likedSongs.map((songs) => (
            <li key={songs.id} className="ls-li">
              <span className="ls-song-title">
                Title:&nbsp;&nbsp;{songs.title}
              </span>
              <span className="ls-song-artist">
                Artist:&nbsp;&nbsp;{songs.artist}
              </span>
              {/* <button
                onClick={() => songs.id !== null && handleDelete(songs.id)}
                className="delete-button"
              >
                ✖
              </button> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LikedSongs;
