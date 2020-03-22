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

@NgModule({
  declarations: [AppComponent, SearchComponent, GoogleMapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDB0vvrNozsGFZD6lD97DTD3oKhtHTZRxk"
    })
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
