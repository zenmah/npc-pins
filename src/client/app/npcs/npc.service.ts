import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Npc } from './npc';

const api = '/api';

@Injectable()
export class NpcService {
  constructor(private http: HttpClient) {}

  getNpcs() {
    return this.http.get<Array<Npc>>(`${api}/Npc`);
  }

  deleteNpc(npc: Npc) {
    return this.http.delete(`${api}/Npc/${npc._id}`);
  }

  addNpc(npc: Npc) {
    return this.http.post<Npc>(`${api}/npc/`, npc);
  }

  updateNpc(npc: Npc) {
    return this.http.put<Npc>(`${api}/Npc/${npc._id}`, npc);
  }
}
