import { Injectable } from '@angular/core';
import { ApiService } from './api'
import { StoreHelper } from './store-helper'

@Injectable()
export class NoteService {
  path: string = "/notes";
  constructor(
    private api: ApiService,
    private storeHelper: StoreHelper
  ) {}

  // handle POST request
  createNote(note) {
    return this.api.post(this.path, note)
    .do(savedState => this.storeHelper.add('notes', savedState));
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
