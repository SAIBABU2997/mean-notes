import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes-list.html',
  styleUrls: ['./notes-list.css']
})
export class NotesListComponent {
  notes: any = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(data => {
      this.notes = data;
    });
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id).subscribe(() => {
      this.loadNotes();
    });
  }
}
