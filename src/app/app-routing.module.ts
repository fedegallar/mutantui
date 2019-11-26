import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { MutantformComponent } from './componentes/mutantform/mutantform.component';
import { StatsComponent } from './componentes/stats/stats.component';


const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'mutantform', component: MutantformComponent},
  {path: 'stats', component: StatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
