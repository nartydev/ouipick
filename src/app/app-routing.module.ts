import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MapComponent } from "./map/map.component";
import { EventComponent } from "./event/event.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { LoginPageComponent } from "./login-page/login-page.component"

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'event', component: EventComponent },
  { path: 'map', component: MapComponent },
  { path: '*', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
