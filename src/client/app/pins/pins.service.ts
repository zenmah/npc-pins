import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as PDK from 'sdk';
import { Pin } from './pin';

// const pinlist_request = "https://api.pinterest.com/v1/boards/{boardId}/pins?access_token={access_token}&fields=id,url,media,image"
const redirect_uri = 'http://localhost:3001/connect/pinterest';
const client_id = '4936142647791208229';
const state = 'state';
const api = '/api';
const limit = 20;
@Injectable()
export class PinsService {

  constructor(private http: HttpClient) { }

  getPins(boardId: string, cursor: string ) {
    return this.http.get<Array<Pin>>(`${api}/pins?limit=${limit}`);
  }

  // pinAuth = {
  //   clientID: client_id,
  //   redirectUri: redirect_uri,
  //   state: state,
  // };
  // // 31032753621603377 boardid sample


  // authenticate() {
  //   const body = {};
  //   PDK.PDK.init({ appId: client_id, cookie: true });
  //   PDK.PDK.login({ scope : 'read_public' }, console.log('Logged In'));
  // }

}
