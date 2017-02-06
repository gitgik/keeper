import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainContainer } from './containers/main';
import { NotesContainer } from './containers/notes';
import { AuthService } from './services/auth';

import { AuthContainer } from './containers/auth';

// Create a module with all the router providers and directives
export const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    component: MainContainer,
    canActivate: [ AuthService ],
    children: [
      { path: '', component: NotesContainer }
    ]
  },
  { path: 'auth', component: AuthContainer },
  { path: '**', redirectTo: ''}
])
