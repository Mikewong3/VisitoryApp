import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { PlaceIdService } from "../place-id.service";
import { location } from "../../models/locations";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  location: String;
  locationId: any = [];
  //Model of recLocations: {name,address,phone,lat,lng,place_id,rating,types,website}
  recLocations: any = [];
  @Output() saved = new EventEmitter<boolean>();
  constructor(private placeIdSerivce: PlaceIdService) {}

  getPID(location) {
    this.placeIdSerivce.getPlaceId(location).subscribe(data => {
      for (const d of data as any) {
        this.locationId.push({
          place_id: d.place_id
        });
      }
      console.log(this.locationId);
    });
  }

  getRecPlaces(location) {
    this.recLocations = this.placeIdSerivce.getRec(location);
  }
  testClick(location) {
    console.log("Click works");
    console.log(location);
  }
  saveLocation(recLocation) {
    this.saved.emit(true);
    let saveLoc = new location(
      recLocation.name,
      recLocation.address,
      recLocation.phone,
      recLocation.lat,
      recLocation.lng,
      recLocation.place_id,
      recLocation.rating,
      recLocation.types,
      recLocation.website
    );
    let resLoc = this.placeIdSerivce
      .saveRecLocation(saveLoc)
      .subscribe(data => {
        console.log(data);
      });
  }

  ngOnInit() {}
}
