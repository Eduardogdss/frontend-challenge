import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(search) {
    let token = getToken();
    const url = 'https://api.spotify.com/v1/search?q='+ search +'&type=artist'
    const response = await fetch(url,{
        method:'GET',
        headers: new Headers({
            'Authorization': 'Bearer '+ token,
            'Content-Type': 'json',
          }), 
    })
    .catch(err => {
      console.log(err.message);
    })
    const data = await response.json();
    return data.artists.items;
}
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
}

export default SomosClient
