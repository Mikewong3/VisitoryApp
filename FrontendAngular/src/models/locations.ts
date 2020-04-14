export class location {
  name: String;
  address: String;
  phone: String;
  geoCords: Number[];
  locationId: String;
  rating: Number;
  types: String[];
  website: String;
  lat: Number;
  lng: Number;
  constructor(
    name: String,
    addr: String,
    phone: String,
    lat: Number,
    lng: Number,
    locationId: String,
    rating: Number,
    types: String[],
    website: String
  ) {
    this.name = name;
    this.address = addr;
    this.locationId = locationId;
    this.phone = phone;
    this.lat = lat;
    this.lng = lng;
    this.rating = rating;
    this.website = website;
    this.types = Object.assign([], types);
  }
}
