import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DockModule } from 'primeng/dock';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-menu',
  imports: [DockModule, TooltipModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit{

  protected router = inject(Router);

  protected menuItems: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Startseite', icon: './icons/home.svg', routerLink: '/' },
      { label: 'Beitreten', icon: './icons/user-plus.svg', routerLink: '/beitreten' },
    ];
  }

}
