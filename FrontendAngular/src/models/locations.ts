export class location {
  address: String;
  locationId: String;
  types: String[];
  constructor(addr: String, locationId: String, types: String[]) {
    this.address = addr;
    this.locationId = locationId;
    this.types = Object.assign([], types);
  }
}
