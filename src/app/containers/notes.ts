import { Component } from '@angular/core';

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
            *ngFor="let note of notes; let i = index"
            (checkEvent)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
  `
})

export class NotesContainer {
  // display data
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
    },
    {
      title: 'Eat',
      value: 'go eat pizza',
      color: 'lightgreen'
    }
  ];

  // Remove the note when checked
  onNoteChecked (i) {
    // splice the checked note out of the array
    this.notes.splice(i, 1);
  }

  // Handle action to be taken once the create note event is triggered
  onNoteCreated(note) {
    // add note to list of notes
    this.notes.push(note);
  }
};
