import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, Observable, Subject } from "rxjs";
import { location } from "../models/locations";
import { catchError, retry, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class PlaceIdService {
  constructor(private http: HttpClient) {}

  private _refreshNeeded = new Subject<any>();

  getPlaceIdURL = "http://localhost:3000/locations/";
  saveRecLocURL = "http://localhost:3000/saveLocation";
  savedLocURL = "http://localhost:3000/getLocations";
  recLocationURL = "http://localhost:3000/autocomplete/";
  getDetailsURL = "http://localhost:3000/getDetails/";
  deleteLocationsURL = "http://localhost:3000/deleteLocation/";

  get refreshNeeded() {
    return this._refreshNeeded;
  }
  getPlaceId(location) {
    return this.http.get(this.getPlaceIdURL.concat(location));
  }
  saveRecLocation(location: location): Observable<location> {
    return this.http.post<location>(this.saveRecLocURL, location).pipe(
      tap(() => {
        this._refreshNeeded.next();
      })
    );
  }
  getSavedLocations() {
    return this.http.get(this.savedLocURL);
  }
  //Ignore the error for the details.attr / it gives the info correctly
  getRec(location) {
    let result: any = [];
    this.http.get(this.recLocationURL.concat(location)).subscribe((data) => {
      for (const d of data as any) {
        this.getPlaceDetails(d.place_id).subscribe((details: any) => {
          result.push({
            name: d.terms[0].value,
            address: details.formatted_address,
            phone: details.formatted_phone_number,
            lat: details.geometry.location.lat,
            lng: details.geometry.location.lng,
            place_id: details.place_id,
            rating: details.rating,
            types: details.types,
            website: details.website,
          });
        });
      }
    });
    console.log(result);

    return result;
  }
  getPlaceDetails(locationId) {
    return this.http.get(this.getDetailsURL.concat(locationId));
  }
  deleteLocation(locationId) {
    return this.http.delete(this.deleteLocationsURL.concat(locationId)).pipe(
      tap(() => {
        this._refreshNeeded.next();
      })
    );
  }
}
