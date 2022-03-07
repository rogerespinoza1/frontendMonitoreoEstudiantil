import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';
import { ListarAlumnosComponent } from './components/listar-alumnos/listar-alumnos.component';

const routes: Routes = [
  {path: '',component:ListarAlumnosComponent},
  {path: 'agregar-alumno',component:AgregarAlumnoComponent},
  {path: 'editar-alumno/:id',component:AgregarAlumnoComponent},
  {path: '**',redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
