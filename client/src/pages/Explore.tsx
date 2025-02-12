// TODO NEED TO BUILD OUT SPOTIFY/MUSIC PLAYER PORTION

import GenreGenerator from "../components/genre-generator";
import SpotifyApp from "../components/spotifyAPP";


const Explore = () => {
 

  return (
    <div className="explore-page">
      <h1 className="explore-title">Check Your Vibe</h1>
      <div className="genre-generator">
        <h2 className="genre-title">
          Click here to generate a new genre to explore
        </h2>
        <GenreGenerator />
      </div>
      <div>
        <h2>
          Click here to link with Spotify
        </h2>
        <SpotifyApp/>
      </div>
    </div>
  );
};

export default Explore;