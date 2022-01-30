import SpotifyWebApi  from 'spotify-web-api-node'

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-private',
    'user-read-email',
    'user-follow-modify',
    'user-follow-read',
    // 'user-library-modify',
    'user-library-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'playlist-modify-private',
    'playlist-read-collaborative',
    'playlist-read-private',
    'playlist-modify-public',
].join(',')

const params = {
    scope: scopes,
}

const queryParamsString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamsString.toString()}`

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    clientSecret: process.env.GITHUB_SECRET,
})

export default spotifyApi;

export { LOGIN_URL }