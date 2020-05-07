import { Component, Input, ViewChild, NgZone, OnInit } from "@angular/core";
import { MapsAPILoader, AgmMap } from "@agm/core";
import { GoogleMapsAPIWrapper } from "@agm/core/services";
import { PlaceIdService } from "../place-id.service";
import { MatTableDataSource, MatSort, MatTable } from "@angular/material";
/* TODO 
  -toggleVisited(loc.id) method 
*/

@Component({
  selector: "app-google-map",
  templateUrl: "./google-map.component.html",
  styles: ["agm-map { height: 300px; /* height is required */ }"],
})
export class GoogleMapComponent implements OnInit {
  defaultLatitude = 40.73061;
  defaultLongitude = -73.935242;
  mapType = "roadmap";
  savedLocations: any = [];
  // savedLocations = new Map();
  @ViewChild(AgmMap, { static: true }) map: AgmMap;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  constructor(private placeIdSerivce: PlaceIdService) {}
  getSavedLocation() {
    this.placeIdSerivce.getSavedLocations().subscribe((data) => {
      this.savedLocations = data;
      console.log("--Get");
      console.log(this.savedLocations);
    });
  }
  deleteLocation(id, index) {
    this.placeIdSerivce.deleteLocation(id).subscribe((data) => {
      this.savedLocations.splice(index, 1);
      this.table.renderRows();
    });
    console.log("--Deleted");
    console.log(this.savedLocations);
  }
  toggleVisited(locationId, visitedStatus) {
    this.placeIdSerivce
      .changedVisitedStatus(locationId, visitedStatus)
      .subscribe((data) => {
        console.log("--toggleVisited Button Clicked--");
      });
  }
  ngOnInit() {
    this.placeIdSerivce.refreshNeeded.subscribe(() => {
      this.getSavedLocation();
    });
    this.getSavedLocation();
  }
}
