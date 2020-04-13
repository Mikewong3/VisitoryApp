import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { location } from "../models/locations";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PlaceIdService {
  constructor(private http: HttpClient) {}

  getPlaceIdURL = "http://localhost:3000/locations/";
  saveRecLocURL = "http://localhost:3000/saveLocation";
  savedLocURL = "http://localhost:3000/getLocations";

  getPlaceId(location) {
    return this.http.get(this.getPlaceIdURL.concat(location));
  }
  saveRecLocation(location: location): Observable<location> {
    return this.http.post<location>(this.saveRecLocURL, location);
  }
  getSavedLocations() {
    return this.http.get(this.savedLocURL);
  }
}
