import { Component } from '@angular/core';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    NgxStarrySkyComponent,
    RouterOutlet
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
