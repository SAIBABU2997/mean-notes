import { Component } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [FormsModule],  // ✅ Add FormsModule here
  templateUrl: './add-note.html',
  styleUrls: ['./add-note.scss']
})
export class AddNoteComponent {
  title: string = '';
  content: string = '';

  constructor(private noteService: NoteService) {}

  addNote() {
    if (!this.title || !this.content) {
      alert("Please enter title and content");
      return;
    }

    const note = { title: this.title, content: this.content };

    this.noteService.addNote(note).subscribe(() => {
      alert("✅ Note Added Successfully!");
      this.title = '';
      this.content = '';
    });
  }
}
