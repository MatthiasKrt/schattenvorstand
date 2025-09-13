import { Component } from '@angular/core';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./menu/menu";

@Component({
  selector: 'app-root',
  imports: [
    NgxStarrySkyComponent,
    RouterOutlet,
    Menu
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
