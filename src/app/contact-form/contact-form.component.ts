import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log("Formulaire soumis", this.formData)
  }
}
