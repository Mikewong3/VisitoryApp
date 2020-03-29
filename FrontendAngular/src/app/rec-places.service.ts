import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecPlacesService {
  constructor(private http: HttpClient) {}
  url = "http://localhost:3000/autocomplete/";
  getRec(location) {
    return this.http.get(this.url.concat(location));
  }
}
