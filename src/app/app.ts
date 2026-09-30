import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './button/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Button],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-tutorial');
  name = 'Ashish';
  email ='ashishkrgupta.7890@gmail.com';
  phone =12345678654;


  saveData() {
    console.log('Data saved');
  }
}
