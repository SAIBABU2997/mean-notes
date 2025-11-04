import { Routes } from '@angular/router';
import { NotesListComponent } from './components/notes-list/notes-list';
import { AddNoteComponent } from './components/add-note/add-note';

export const routes: Routes = [
  { path: '', component: NotesListComponent },      // Home = Notes List
  { path: 'add-note', component: AddNoteComponent } // Add Note page
];
