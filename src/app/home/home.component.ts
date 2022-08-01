import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // console.log('Message no. 1: Sync');
    // setTimeout(function() {
    //    console.log('Message no. 2: setTimeout');
    // }, 0);
    // var promise = new Promise<void>(function(resolve, reject) {
    //    resolve();
    // });
    // promise.then(function(resolve) {
    //    console.log('Message no. 3: 1st Promise');
    // })
    // .then(function(resolve) {
    //    console.log('Message no. 4: 2nd Promise');
    // });
    // console.log('Message no. 5: Sync');

    // Event loop
    function LevelTwo() {
      console.log("Inside Level Two!")
   }
     
   function LevelOne() {
      LevelTwo()
   }
     
   function main() {
      LevelOne()
   }
     
   main()
   
  }
}
