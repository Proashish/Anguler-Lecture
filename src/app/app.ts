import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  name ="Anguler Tutorial";
  Flag = false;
  count =5;
  price = 1000;
  username = "Ashish";
  isLoggedIn = true;
  title = signal("Welcome to Anguler Tutorial");

  getUser() {
    return "Ashish";
  }

}
