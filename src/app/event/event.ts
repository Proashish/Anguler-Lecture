import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-event',
  styleUrl: './event.css',
  templateUrl: './event.html',
})
export class Event {

   count = signal(0);
   
   incrementCount() {
     this.count.update((value) => value + 1);
   }

   showEvent(e:any){
    console.log(e);
   }

  username = '';
  updateUser(value: string) {
    this.username = value;
  }

}
