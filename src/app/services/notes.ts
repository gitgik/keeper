import { Injectable } from '@angular/core';
import { ApiService } from './api'

export class NoteService {

  path: string = "/notes";
  constructor(private api: ApiService) {

  }

  createNotes(note) {
    return this.api.post(this.path, note)
  }

  getNotes() {
    return this.api.get(this.path);
  }

  deleteNotes(note) {
    return this.api.delete(`${this.path}/${note.id}`);
  }
}