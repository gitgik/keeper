import { Component, Output, EventEmitter } from '@angular/core'


@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      border-radius: 3px;
      background-color: #fff;
      padding: 20px;
      position: relative;
      top: 1em;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
    .full {
      height: 100px;
    }
    .
  `],
  template: `
    <div class="note-creator shadow-1" [ngStyle]="{'background-color': newNote.color}">
      <form class="row" (submit)="onCreateNote()">
        <input type="text" placeholder="Title" class="col-xs-10 title"
          [(ngModel)]="newNote.title" name="noteTitle"
          *ngIf="fullForm"
        >
        <input type="text" placeholder="Take a note..." class="col-xs-10"
          (focus)="toggleForm(true)"
          [(ngModel)]="newNote.value" name="noteValue"
        >
        <div class="actions col-xs-12 row between-xs"
        *ngIf="newNote.value && newNote.title">
          <div class="col-xs-3">
            <color-picker
            [colors]="colors"
            (selected)="onColorSelected($event)"
            ></color-picker>
          </div>
          <button type="submit" class="btn-light">Done</button>
        </div>
      </form>
    </div>
  `
})

export class NoteCreator {
  // Declare an event to be emitted when a new note is created
  @Output() createNote = new EventEmitter();

  colors: string[] = [
    '#77DD77', '#2B92DA', '#D2E9E7', '#8CA9DE', '#FA8787', '#FFF', '#F4A9C2',
    '#FF6961', '#B19CD9'];


  newNote = {
    title: '',
    value: '',
    color: '#fff',
  };

  fullForm: boolean = false;

  toggleForm(value: boolean) {
    this.fullForm = value;
  }

  onCreateNote() {
    const {title, value, color} = this.newNote;

    if (title && value) {
      // fire event if only there's a title and a value filled up
      this.createNote.next({title, value, color});
    }
    // reset the input fields
    this.reset();
    this.toggleForm(false);
  }

  // Resets the input field values to be empty
  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: '#fff',
    }
  }

  onColorSelected(color: string) {
    this.newNote.color = color;
  }
};
