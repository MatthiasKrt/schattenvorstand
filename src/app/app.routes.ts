import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./start/start').then(c => c.Start)
    },
    {
        path: 'beitreten',
        loadComponent: () => import('./beitritt-form/beitritt-form').then(c => c.BeitrittForm)
    }
];
