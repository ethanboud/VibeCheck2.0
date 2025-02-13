import { useState, useEffect } from 'react';
import WebPlayback from './WebPlaybackComponent'
import Login from './spotifyLogin'
import '../index.css';

function SpotifyApp() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <>
        { (token === '') ? <Login/> : WebPlayback }
    </>
  );
}

export default SpotifyApp;