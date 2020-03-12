import { Component, OnInit } from "@angular/core";
import { PlaceIdService } from "../../place-id.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  location: String;
  locationId: any = [];

  constructor(private placeIdSerivce: PlaceIdService) {}
  getPID() {
    this.placeIdSerivce.getPlaceId().subscribe(data => {
      for (const d of data as any) {
        this.locationId.push({
          place_id: d.place_id
        });
      }
      console.log(this.locationId);
    });
  }
  testClick(location) {
    console.log("Click works");
    console.log(location);
  }

  ngOnInit() {
    this.getPID();
  }
}
