import { Component } from '@angular/core'


@Component({
  selector: 'note-creator',
  styles: [`
    .note-creator {
      border-radius: 3px;
      background-color: #fff;
      padding: 20px;
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
    <div class="note-creator shadow-1">
      <form class="row">
        <input type="text" placeholder="Title" class="col-xs-10 title"
          [(ngModel)]="newNote.title" name="noteTitle"
        >
        <input type="text" placeholder="Take a note..." class="col-xs-10"
          [(ngModel)]="newNote.value" name="noteValue"
        >
        <div class="actions col-xs-12 row between-xs">
          <button type="submit" class="btn-light">Done</button>
        </div>
      </form>
      <pre>{{ newNote | json }}</pre>
    </div>
  `
})

export class NoteCreator {

  newNote = {
    title: '',
    value: ''
  }
};
