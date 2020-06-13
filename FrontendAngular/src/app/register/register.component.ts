import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { UserData } from "../../models/User";
import { PlaceIdService } from "../place-id.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RegisterComponent>,
    private placeIdSerivce: PlaceIdService,
    private _snackBar: MatSnackBar
  ) {}
  email: String;
  password: String;
  onNoClick(): void {
    this.dialogRef.close();
  }
  registerUser() {
    let newUser = new UserData(this.email, this.password);
    this.placeIdSerivce.saveUser(newUser);
    this._snackBar.open("You Are Registered!", "Dismiss", {
      duration: 3 * 1000,
    });
    this.dialogRef.close();
  }
  ngOnInit() {}
}
