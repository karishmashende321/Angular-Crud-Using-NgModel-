import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    function init() {
      var name = 'Mozilla'; // name is a local variable created by init
      function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
      }
      displayName();
    }
    init();


    // type coercion

    const value1 = '5';
    const value2 = 9;
    let sum = value1 + value2;

    console.log(sum);
  }


}
