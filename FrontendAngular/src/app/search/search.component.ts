import { Component, OnInit } from "@angular/core";
import { PlaceIdService } from "../../place-id.service";
import { RecPlacesService } from "../rec-places.service";
@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  location: String;
  locationId: any = [];
  recLocations: any = [];
  constructor(
    private placeIdSerivce: PlaceIdService,
    private recPlaceService: RecPlacesService
  ) {}
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
    this.recPlaceService.getRec(location).subscribe(data => {
      for (const d of data as any) {
        this.recLocations.push({
          description: d.description,
          place_id: d.place_id
        });
      }
    });
  }
  testClick(location) {
    console.log("Click works");
    console.log(location);
  }

  ngOnInit() {}
}
