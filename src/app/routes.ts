import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainContainer } from './containers/main';
import { NotesContainer } from './containers/notes';

// Create a module with all the router providers and directives
export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: MainContainer,
    children: [
      { path: '', component: NotesContainer }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
])
