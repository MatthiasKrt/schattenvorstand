import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { BeitrittDaten } from './beitritt-daten';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
@Component({
  selector: 'app-beitritt-form',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    SelectModule,
    TextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './beitritt-form.html',
  styleUrl: './beitritt-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeitrittForm {
  private fb = inject(FormBuilder);

  protected beitrittForm;

  protected getraenkeOptions = [
    { label: 'Bier', value: 'Bier' },
    { label: 'Radler', value: 'Radler' },
    { label: 'Cocktail', value: 'Cocktail' },
    { label: 'Cola (Korn) natürlich', value: 'ColaKorn' },
    { label: 'Wasser (nur im Notfall)', value: 'Wasser' },
  ];

  constructor() {
    this.beitrittForm = this.createForm();
  }

  private createForm() {
    return this.fb.group({
      name: ['', Validators.required],
      lieblingsgetraenk: ['', Validators.required],
      gruende: [''],
    });
  }

  protected onSubmit(): void {
    if (this.beitrittForm.valid) {
      const formData = this.beitrittForm.value as BeitrittDaten;
      console.log('Neue Beitrittsdaten:', formData);
    }
  }
}
