import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Login,SigninComponent],
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
