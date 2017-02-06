import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './services/api';
import { NoteService } from './services/notes';
import { StoreHelper } from './services/store-helper';
import { Store } from './store';

import { AppComponent } from './app.component';
import { MainContainer } from './containers/main';
import { NotesContainer } from './containers/notes';
import { AuthContainer } from './containers/auth';
import { routes } from './routes';
import { AppBar } from './ui/app-bar'
import { NoteCard } from './ui/note-card'
import { NoteCreator } from './ui/note-creator'
import {ColorPicker} from './ui/color-picker'

@NgModule({
  // Specify a list of directives to use
  declarations: [
    AppComponent,
    AuthContainer,
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
    HttpModule,
    routes
  ],
  providers: [
    ApiService,
    NoteService,
    StoreHelper,
    Store,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
