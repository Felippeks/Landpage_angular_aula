import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
})
export class NewsletterFormComponent {
  newsletterform!: FormGroup;

  constructor() {
    this.newsletterform = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.newsletterform.value);
  }
}
