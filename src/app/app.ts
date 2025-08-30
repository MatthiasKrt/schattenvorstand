import { Component, signal } from '@angular/core';
import { NgxSpotlightComponent } from '@omnedia/ngx-spotlight';
import { NgxLightRaysComponent } from '@omnedia/ngx-light-rays';
import { NgxCrypticTextComponent } from '@omnedia/ngx-cryptic-text';
import { NgxLampComponent } from '@omnedia/ngx-lamp';
import { NgxAuroraComponent } from '@omnedia/ngx-aurora';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { NgxNeonUnderlineComponent } from '@omnedia/ngx-neon-underline';

@Component({
  selector: 'app-root',
  imports: [
    NgxSpotlightComponent,
    NgxLightRaysComponent,
    NgxCrypticTextComponent,
    NgxLampComponent,
    NgxAuroraComponent,
    NgxStarrySkyComponent,
    NgxNeonUnderlineComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('Schattenvorstand');
  protected subtitle = signal('Wir trinken im Schatten, während der Vorstand sich abrackert');
}
