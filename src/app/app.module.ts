import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NoteService } from './services/notes';
import { ApiService } from './services/api';
import { AppComponent } from './app.component';
import { MainContainer } from './containers/main';
import { NotesContainer } from './containers/notes';
import { AppBar } from './ui/app-bar'
import { NoteCard } from './ui/note-card'
import { NoteCreator } from './ui/note-creator'
import {ColorPicker} from './ui/color-picker'

@NgModule({
  // Specify a list of directives to use
  declarations: [
    AppComponent,
    MainContainer,
    AppBar,
    NoteCard,
    NotesContainer,
    NoteCreator,
    ColorPicker,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ApiService, NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
