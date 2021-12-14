import { clearToken, getToken, getOauthClient } from 'utils'

class SomosClient {

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
    });
    console.log(response.status);
    if (response.status === 401){
      clearToken();
      console.log('expirou o token');
      getToken();
    }
    const data = await response.json()
    return data;
}
  async getFullArtist(id){
    let token = getToken();
    const url = "https://api.spotify.com/v1/artists/"+id;
    const response = await fetch(url,{
      method:'GET',
      headers: new Headers({
          'Authorization': 'Bearer '+ token,
          'Content-Type': 'json',
        }), 
      });
    if (response.status === '401'){
      clearToken();
      console.log('expirou o token');
      getToken();
    }
    const url2 = "https://api.spotify.com/v1/artists/"+id+"/albums?limit=10";
    const response2 = await fetch(url2,{
      method:'GET',
      headers: new Headers({
          'Authorization': 'Bearer '+ token,
          'Content-Type': 'json',
        }), 
      });
    if (response.status ==='401'){
      getOauthClient();
      clearToken();
      getToken();
    }
  const data1 = await response.json()
  const data2 = await response2.json()
  return [data1,data2];
  }
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
}

export default SomosClient
