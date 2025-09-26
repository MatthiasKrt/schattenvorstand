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

  ngOnInit() {
    this.setRandomSubline();
  }

  /**
   * Setzt eine zufällige Subline aus der SUBLINES Liste.
   */
  private setRandomSubline(): void {
    const randomIndex = Math.floor(Math.random() * SUBLINES.length);
    this.subtitle.set(SUBLINES[randomIndex]);
  }
  
}
