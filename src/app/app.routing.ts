import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './share/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
