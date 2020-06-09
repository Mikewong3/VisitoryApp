import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { GoogleMapComponent } from "./google-map/google-map.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";
import { RootComponent } from "./root/root.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: RootComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
