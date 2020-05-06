import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

@NgModule({
  declarations: [AppComponent, SearchComponent, GoogleMapComponent],
  imports: [
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
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
