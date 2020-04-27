import { Component, Input, ViewChild, NgZone, OnInit } from "@angular/core";
import { MapsAPILoader, AgmMap } from "@agm/core";
import { GoogleMapsAPIWrapper } from "@agm/core/services";
import { PlaceIdService } from "../place-id.service";

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styles: ["agm-map { height: 300px; /* height is required */ }"],
})
export class GoogleMapComponent implements OnInit {
  defaultLatitude = 40.73061;
  defaultLongitude = -73.935242;
  mapType = "roadmap";

  savedLocations = new Map();
  // savedLocations: any = [];
  @ViewChild(AgmMap, { static: true }) map: AgmMap;

  constructor(private placeIdSerivce: PlaceIdService) {}
  getSavedLocation() {
    this.placeIdSerivce.getSavedLocations().subscribe((data) => {
      for (const d of data as any) {
        // this.savedLocations.push({
        //   lat: d.geoCordinates[0],
        //   lng: d.geoCordinates[1],
        //   rating: d.rating,
        //   name: d.name,
        //   website: d.website,
        //   address: d.address,
        //   phone: d.phone,
        //   locationId: d.locationId,
        // });
        let tempData = {
          lat: d.geoCordinates[0],
          lng: d.geoCordinates[1],
          rating: d.rating,
          name: d.name,
          website: d.website,
          address: d.address,
          phone: d.phone,
        };
        this.savedLocations.set(d.locationId, tempData);
      }
    });
    console.log(this.savedLocations);
  }
  deleteLocation(id) {
    this.placeIdSerivce.deleteLocation(id).subscribe((data) => {
      this.savedLocations.delete(id);
    });
  }
  ngOnInit() {
    this.placeIdSerivce.refreshNeeded.subscribe(() => {
      this.getSavedLocation();
    });
    this.getSavedLocation();
  }
}
