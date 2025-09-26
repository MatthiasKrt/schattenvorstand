import { Component } from '@angular/core';
import { NgxStarrySkyComponent } from '@omnedia/ngx-starry-sky';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [NgxStarrySkyComponent, RouterOutlet, Menu, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [MessageService],
})
export class App {}
