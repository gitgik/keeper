import { Injectable } from '@angular/core';
import { ApiService } from './api'

export class NoteService {
  path: string = "/notes";
  constructor(private api: ApiService) {}

  // handle POST request
  createNotes(note) {
    return this.api.post(this.path, note)
  }

  // handle GET request
  getNotes() {
    return this.api.get(this.path);
  }

  // handle DELETE request
  deleteNotes(note) {
    return this.api.delete(`${this.path}/${note.id}`);
  }
}
