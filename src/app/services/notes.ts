import { Injectable } from '@angular/core';
import { ApiService } from './api'

@Injectable()
export class NoteService {
  path: string = "/notes";
  constructor(private api: ApiService) {}

  // handle POST request
  createNote(note) {
    return this.api.post(this.path, note)
  }

  // handle GET request

  getNotes() {
    return this.api.get(this.path);
  }


  // handle DELETE request
  deleteNote(note) {
    return this.api.delete(`${this.path}/${note.id}`);
  }
}
