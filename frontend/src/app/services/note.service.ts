import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private apiUrl = 'https://mean-notes-backend.onrender.com/api/notes';


  constructor(private http: HttpClient) {}

  getNotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addNote(note: any): Observable<any> {
    return this.http.post(this.apiUrl, note);
  }

  deleteNote(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
