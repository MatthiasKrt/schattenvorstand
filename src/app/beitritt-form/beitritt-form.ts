import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
  inject,
  effect,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { BeitrittDaten } from './beitritt-daten';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { GETRAENKE } from './getraenke';
import { MessageService } from 'primeng/api';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LOADING_TEXTS } from './loading-text';
import { BEITRITTS_GRUENDE } from './beitritts-gruende';

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
    ProgressSpinnerModule,
  ],
  templateUrl: './beitritt-form.html',
  styleUrl: './beitritt-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeitrittForm {
  private fb = inject(FormBuilder);
  private messageService = inject(MessageService);

  protected beitrittForm;

  protected getraenkeOptions = GETRAENKE;

  private minLoadingDelay = 2000; // 1 Sekunde = 1000 Millisekunden
  private maxLoadingDelay = 10000; // 1 Sekunde = 1000 Millisekunden
  protected isLoading = signal(false);
  protected waitingText = signal('');
  private intervalRotateWaitingText = 3000; // 1 Sekunde = 1000 Millisekunden
  private intervalId: any = null;

  constructor() {
    this.beitrittForm = this.createForm();

    effect(() => {
      if (this.isLoading()) {
        this.waitingText.set(this.getRandomWaitingText());

        this.intervalId = setInterval(() => {
          this.waitingText.set(this.getRandomWaitingText());
        }, this.intervalRotateWaitingText);
      } else {
        if (this.intervalId) {
          clearInterval(this.intervalId);
          this.intervalId = null;
        }
      }
    });
  }

  /**
   * Erstellt das Formular mit den erforderlichen Feldern und Validierungen.
   *
   * @returns FormGroup
   */
  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      lieblingsgetraenk: ['', Validators.required],
      gruende: [''],
    });
  }

  /**
   * Wird aufgerufen, wenn das Formular abgeschickt wird.
   */
  protected onSubmit(): void {
    this.messageService.clear();

    if (this.beitrittForm.valid) {
      this.isLoading.set(true);

      const formData = this.beitrittForm.value as BeitrittDaten;

      // Zufällige Verzögerung von 2-10 Sekunden
      const delay =
        Math.floor(Math.random() * (this.maxLoadingDelay - this.minLoadingDelay + 1)) +
        this.minLoadingDelay;

      setTimeout(() => {
        this.showBeitrittsGrund();
        this.beitrittForm.reset();
        this.isLoading.set(false);

        this.beitrittForm.reset();
      }, delay);
    }
  }

  /**
   * Zeigt eine Nachricht mit dem Grund für die Aufnahme oder Ablehnung an.
   */
  private showBeitrittsGrund(): void {
    const aufgenommen = Math.random() < 0.5;

    const grundList = aufgenommen ? BEITRITTS_GRUENDE.aufgenommen : BEITRITTS_GRUENDE.abgelehnt;

    const severity = aufgenommen ? 'success' : 'error';
    const summary = aufgenommen ? 'Aufnahme erfolgreich!' : 'Aufnahme abgelehnt';

    const grund = grundList[Math.floor(Math.random() * grundList.length)];

    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: grund,
      sticky: true,
    });
  }

  /**
   * Gibt einen zufälligen Wartetext zurück.
   *
   * @returns Ein zufälliger Wartetext aus der Liste WAITING_TEXTS.
   */
  private getRandomWaitingText(): string {
    return LOADING_TEXTS[Math.floor(Math.random() * LOADING_TEXTS.length)];
  }
}
