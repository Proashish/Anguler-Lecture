import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('anguler-tutorial');
  name = 'Ashish';
  email ='ashishkrgupta.7890@gmail.com';
  phone =12345678654;

  count =0;

  handleClick(){
    let variable = "Hi Ashish";
    console.log("Button Clicked " +variable);
    this.helloWorld();
}

 helloWorld(){                                                    
  console.log("Hello World"); 
 }


 handleClick2(){
  console.log("Button Clicked 2");
 }

 onTyping(event: unknown){
  console.log("Typing Event " + event);
 }

}