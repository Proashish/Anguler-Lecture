import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Event } from './event/event';

@Component({
  selector: 'app-root',
  imports: [Event
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-tutorial');
  name = 'Ashish';
  email ='ashishkrgupta.7890@gmail.com';
  phone =12345678654;

}
