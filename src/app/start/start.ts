import { Component, signal } from '@angular/core';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';

@Component({
  selector: 'app-start',
  imports: [NgxCrypticTextComponent],
  templateUrl: './start.html',
  styleUrl: './start.css'
})
export class Start {
  protected title = signal('Schattenvorstand');
  protected subtitle = signal('Wir trinken im Schatten, während der Vorstand sich abrackert');
}
