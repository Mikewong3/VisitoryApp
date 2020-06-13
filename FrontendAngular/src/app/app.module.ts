import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { GoogleMapComponent } from "./google-map/google-map.component";
import { AgmCoreModule } from "@agm/core";
import { GoogleMapsAPIWrapper } from "@agm/core/services";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material";
import { MatSliderModule } from "@angular/material/slider";
import { CdkTableModule } from "@angular/cdk/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { LoginComponent } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { RootComponent } from "./root/root.component";
import { RegisterComponent } from "./register/register.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GoogleMapComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
  ],
  imports: [
    MatListModule,
    MatSnackBarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    CdkTableModule,
    MatTableModule,
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDB0vvrNozsGFZD6lD97DTD3oKhtHTZRxk",
    }),
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
