import { Injectable } from '@angular/core';

// const pinlist_request = "https://api.pinterest.com/v1/boards/{boardId}/pins?access_token={access_token}&fields=id,url,media,image"
const redirect_uri = 'http://localhost:3001/connect/pinterest';
const client_id = '4936142647791208229';
const state = 'state';
@Injectable()
export class PinsService {

  pinAuth = {
    clientID: client_id,
    redirectUri: redirect_uri,
    state: state,
  };
  // 31032753621603377 boardid sample
  constructor() { }

  authenticate() {
    // https://api.pinterest.com/oauth/
    /***
     * https://api.pinterest.com/oauth/?
          response_type=code&
          redirect_uri=https://mywebsite.com/connect/pinterest/&
          client_id=12345&
          scope=read_public,write_public&
          state=768uyFys
     */
  }


  getPins(boardId: string) {
    return [];
    // return this.http.get<Array<Npc>>(`${api}/Npc`);
  }
}
