import { Component } from '@angular/core';

@Component({
  selector: 'notes-container',
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">Your notes</div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
  `
})

export class NotesContainer {
  notes = [
    {
      title: 'this is a note',
      value: 'eat some food',
      color: 'turquoise'
    },
    {
      title: 'travel',
      value: 'go to ibiza',
      color: 'yellow'
    }
  ];

  onNoteChecked (i) {
    // splice the checked note out of the array
    this.notes.splice(i, 1)
  }
};
