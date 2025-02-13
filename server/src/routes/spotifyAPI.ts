
import express, { Request, Response } from 'express';
import request from 'request';
import dotenv from 'dotenv';

const port = 3002;

const router = express.Router();

(global as any).access_token = '';

dotenv.config();

const spotify_client_id = process.env.SPOTIFY_CLIENT_ID || '';
const spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET || '';

const spotify_redirect_uri = 'http://localhost:3000/spotifyauth/callback';

const generateRandomString = (length: number): string => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const app = express();

app.get('/spotifyauth/login', ( res: Response) => {
  const scope = "streaming user-read-email user-read-private";
  const state = generateRandomString(16);

  const auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state
  });

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/spotifyauth/callback', (req: Request, res: Response) => {
  const code = req.query.code as string;

  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  request.post(authOptions, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      (global as any).access_token = body.access_token;
      res.redirect('/');
    }
  });
});

app.get('/spotifyauth/token', ( res: Response) => {
  res.json({ access_token: (global as any).access_token = ''});
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

export {router as spotifyRouter};