import * as url from 'url';
import { ParsedUrlQuery } from 'querystring';
import * as Spotify from 'spotify-web-api-js';
import { Playlist, Track, User } from './classes';

export async function getUserId(accessToken: string) {
  const spotifyApi = new Spotify();
  spotifyApi.setAccessToken(accessToken);
  const user = await spotifyApi.getMe();
  return new User(user);
}

export async function getPlaylistTracks(
  accessToken: string, ownerId: string, playlistId: string) {

  const spotifyApi = new Spotify();
  spotifyApi.setAccessToken(accessToken);

  async function getNext(tracks: Track[], offset: number): Promise<Track[] | undefined> {
    const response = await spotifyApi.getPlaylistTracks(
      ownerId, playlistId, { offset, limit: 100 });
    const merged = tracks.concat(response.items.map(_ => new Track(_)));
    
    // Proceed to next page if all tracks haven't been found 
    if (response.next) { 
      const nextUrl = url.parse(response.next, true); 
      if (nextUrl.query !== undefined) { 
        const nextOffset = Number((nextUrl.query as ParsedUrlQuery).offset); 
        return getNext(merged, nextOffset); 
      } 
    }

    // Return data 
    return merged;
  }

  return await getNext([], 0);
}

export async function getUserPlaylists(accessToken: string, id: string) {

  const spotifyApi = new Spotify();
  spotifyApi.setAccessToken(accessToken);

  async function getNext(playlists: Playlist[], offset: number): Promise<Playlist[] | undefined> {
    
    const lists = await spotifyApi.getUserPlaylists(id, { offset, limit: 10 });
    const merged = playlists.concat(lists.items.map(_ => new Playlist(_)));

    /// Proceed to next page if all tracks haven't been found 
    if (lists.next) {
      const nextUrl = url.parse(lists.next, true);
      if (nextUrl.query !== undefined) {
        const nextOffset = Number((nextUrl.query as ParsedUrlQuery).offset);
        return getNext(merged, nextOffset);
      }
    }

    // Return data
    return merged;

  }

  return await getNext([], 0);
}

export async function createPlaylist(
  accessToken: string, userId: string, playlistName: string, tracks: Track[]) {

  const spotifyApi = new Spotify();
  spotifyApi.setAccessToken(accessToken);

  const trackUris = tracks.map(_ => _.uri);

  const newPlaylist = await spotifyApi.createPlaylist(userId, { name: playlistName });

  async function addTracksToPlaylist(playlistId: string, uris: string[]):
   Promise<SpotifyApi.CreatePlaylistResponse | undefined> {
    const limitedUris = uris.length > 100 ? uris.slice(0, 100) : uris;
    await spotifyApi.addTracksToPlaylist(userId, playlistId, limitedUris);
    if (uris.length > 100) {
      return addTracksToPlaylist(playlistId, uris.splice(100));
    }
    return newPlaylist;
  }

  return addTracksToPlaylist(newPlaylist.id, trackUris);

}                                      
