import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class PlaceIdService {
  constructor(private http: HttpClient) {}

  configUrl = "http://localhost:3000";
  getPlaceId() {
    return this.http.get(this.configUrl);
  }
}
