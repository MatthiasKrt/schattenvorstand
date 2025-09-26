import { Component, OnInit, signal } from '@angular/core';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { SUBLINES } from './sublines';

@Component({
  selector: 'app-start',
  imports: [NgxCrypticTextComponent],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start implements OnInit {
  protected title = signal('Schattenvorstand');
  protected subtitle = signal('');

  /**
   * Der Index der zuletzt angezeigten Subline, um Wiederholungen zu vermeiden.
   */
  private lastSublineIndex: number = -1;

  ngOnInit() {
    this.setRandomSubline();
  }

  /**
   * Setzt eine zufällige Subline aus der SUBLINES Liste.
   */
  private setRandomSubline(): void {

    if(SUBLINES.length === 0) return;

    // Sicherstellen, dass nicht die gleiche Subline wie zuletzt angezeigt wird
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * SUBLINES.length);
    } while (randomIndex === this.lastSublineIndex && SUBLINES.length > 1);

    this.lastSublineIndex = randomIndex;
    this.subtitle.set(SUBLINES[randomIndex]);
  }
  
}
