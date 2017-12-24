import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as PDK from 'sdk';
import { Pin } from './pin';
import { PinData } from './pinData';
import { PinBoardData } from './PinBoardData';

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
    return this.http.get<PinData>(`${api}/pins?limit=${limit}&board_id=${boardId}`);
  }
  getBoards(cursor: string ) {
    return this.http.get<PinBoardData>(`${api}/boards?limit=${limit}`);
  }
}
