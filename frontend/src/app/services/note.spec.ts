import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private apiUrl = 'http://localhost:5000/api/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.apiUrl, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
