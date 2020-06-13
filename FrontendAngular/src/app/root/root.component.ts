import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-root",
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.css"],
})
export class RootComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  logout() {
    this.authService.logoutSession();
    this.router.navigate(["login"]);
  }

  ngOnInit() {}
}
