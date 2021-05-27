import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MapComponent } from './components/map/map.component'
import { MapagrupoComponent } from './components/mapagrupo/mapagrupo.component'
import { ConsultasComponent } from './components/consultas/consultas.component'

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'consultas',
    component: ConsultasComponent
  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mapa',
    component: MapComponent
  },
  {
    path: 'mapagrupo',
    component: MapagrupoComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
