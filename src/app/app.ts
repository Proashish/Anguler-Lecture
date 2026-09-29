import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-tutorial');
  
  phone =12345678654;

  name : string = '';
  city : string = '';
  email : string = '';

  updateName(val :string) {
   
    this.name =val 

  }

  getEmail(val :string) {
    this.email =val 
  }

  Count =signal(0);
  Value =signal(60);

  increaseCount() {
    this.Count.set(this.Count() + 1);
  } 

  decreaseCount() {
    this.Count.set(this.Count() - 1);
  }
  resetCount() {
    this.Count.set(0);
  } 

}
