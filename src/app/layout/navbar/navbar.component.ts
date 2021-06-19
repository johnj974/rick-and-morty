import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //.
  navbarArray: string[] = ['Home', 'Characters', 'Locations', 'Episodes'];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navLink(info: string) {
    const lowerNav = info.toLowerCase();
    console.log(lowerNav);
    if (lowerNav === 'home') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate([lowerNav]);
    }
  }
}
