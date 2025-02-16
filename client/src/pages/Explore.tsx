// TODO NEED TO BUILD OUT SPOTIFY/MUSIC PLAYER PORTION

import GenreGenerator from "../components/genre-generator";
// import SpotifyApp from "../components/spotifyAPP";
import SpotifyLogin from "../components/spotifyLogin";


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
        <SpotifyLogin/>
      </div>
      <div>
      <h1>Display your Spotify profile data</h1>
<section id="profile">
<h2>Logged in as <span id="displayName"></span></h2>
<span id="avatar"></span>
<ul>
    <li>User ID: <span id="id"></span></li>
    <li>Email: <span id="email"></span></li>
    <li>Spotify URI: <a id="uri" href="#"></a></li>
    <li>Link: <a id="url" href="#"></a></li>
    <li>Profile Image: <span id="imgUrl"></span></li>
</ul>
</section>
      </div>
    </div>
  );
};

export default Explore;