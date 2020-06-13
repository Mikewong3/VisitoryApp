import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { RegisterComponent } from "../register/register.component";
import { UserData } from "../../models/User";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  userEmail: String;
  userPassword: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}
  openDialog(): void {
    const registerDialog = this.dialog.open(RegisterComponent, {
      width: "300px",
      data: { userEmail: this.userEmail },
    });
    registerDialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {}
  login() {
    this.authService
      .validate(this.userEmail, this.userPassword)
      .then((response) => {
        this.authService.setUserInfo({ user: response["user"] });
        this.router.navigate(["home"]);
      });
  }
}
