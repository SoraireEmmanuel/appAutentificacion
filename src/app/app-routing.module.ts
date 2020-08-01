import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componenet/home/home.component';
import { PrecioComponent } from './componenet/precio/precio.component';
import { ProtegidaComponent } from './componenet/protegida/protegida.component';

import { AuthGuard} from './services/auth.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'precio', component:PrecioComponent},
  {path:'protegida', component:ProtegidaComponent, canActivate:[AuthGuard]},
  {path:'**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
