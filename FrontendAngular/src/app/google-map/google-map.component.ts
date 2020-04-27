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
  testData = [
    { lat: 34.155834, lng: -119.202789 },
    { lat: 31.442778, lng: -100.450279 },
    { lat: 41, lng: -74 },
  ];
  savedLocations: any = [];
  @ViewChild(AgmMap, { static: true }) map: AgmMap;

  constructor(private placeIdSerivce: PlaceIdService) {}
  getSavedLocation() {
    this.placeIdSerivce.getSavedLocations().subscribe((data) => {
      for (const d of data as any) {
        this.savedLocations.push({
          lat: d.geoCordinates[0],
          lng: d.geoCordinates[1],
          rating: d.rating,
          name: d.name,
          website: d.website,
          address: d.address,
          phone: d.phone,
          locationId: d.locationId,
        });
      }
    });
    console.log(this.savedLocations);
  }
  deleteLocation(id) {
    this.placeIdSerivce.deleteLocation(id).subscribe((data) => {
      console.log(data);
      window.location.reload();
    });
  }
  ngOnInit() {
    this.placeIdSerivce.refreshNeeded.subscribe(() => {
      this.getSavedLocation();
    });
    this.getSavedLocation();
  }
}
