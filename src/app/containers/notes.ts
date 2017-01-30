import { Component, OnDestroy } from '@angular/core';
import { NoteService } from '../services/notes';

@Component({
  selector: 'notes-container',
  styles: [`
    .notes: {
      padding: 50px;
    }

    .creator {
      margin-bottom: 40px;
    }
  `],
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote)="onNoteCreated($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes"
            (checkEvent)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})

export class NotesContainer implements OnDestroy {

  constructor(private noteService: NoteService) {
    this.noteService.getNotes()
    .subscribe(resp => this.notes = resp.data);
  }

  ngOnDestroy() {
    console.log('destroyed');
  }

  // notes to be dispayed
  notes = [];

  // Handle action to be taken once the create note event is triggered
  onNoteCreated(note) {
    // add note to list of notes
    this.noteService.createNote(note)
    .subscribe(note => this.notes.push(note));
  }

  // Remove the note when checked
  onNoteChecked (note) {
    // splice the checked note out of the array
    // this.notes.splice(i, 1);
    this.noteService.deleteNote(note)
    .subscribe(note => {
      const i = this.notes.findIndex(localNote => localNote.id === note.id);
      this.notes.splice(i, 1);
    })
  }
};
