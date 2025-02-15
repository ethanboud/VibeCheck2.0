import { fetchSpotify } from "./spotifyAPP";

function SpotifyLogin() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <a className="btn-spotify" href="./spotifyAPP" >CONNECT
                </a> */}
                <button onClick={fetchSpotify}>CONNECT</button>
            </header>
        </div>
    );
}

export default SpotifyLogin;