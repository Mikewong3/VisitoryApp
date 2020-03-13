import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PlaceIdService {
  constructor(private http: HttpClient) {}

  defaultURL = "http://localhost:3000/locations/";
  getPlaceId(location) {
    return this.http.get(this.defaultURL.concat(location));
  }
}
