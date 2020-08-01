import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componenet/navbar/navbar.component';
import { HomeComponent } from './componenet/home/home.component';
import { ProtegidaComponent } from './componenet/protegida/protegida.component';
import { PrecioComponent } from './componenet/precio/precio.component';

import { AuthService} from './services/auth.service';
import { CallbackComponent } from './componenet/callback/callback.component';
import { ProfileComponent } from './componenet/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PrecioComponent,
    CallbackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
