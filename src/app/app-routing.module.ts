import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { InfoGeneralComponent } from './components/info-general/info-general.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'general',component:InfoGeneralComponent},
  {path:'patrocinadores',component:PatrocinadoresComponent},
  {path:'registro',component:RegistroComponent},


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
