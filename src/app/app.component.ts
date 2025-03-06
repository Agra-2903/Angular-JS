import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'Hello from BridgeLabz';
  imgUrl = "assets/BL_logo_square_jpg.jpg";
  url = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz."
  }

  onClick($event: MouseEvent) {
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
}
