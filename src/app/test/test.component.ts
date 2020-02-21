import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

  <!--Interpolation -->
  <h2>Welcome {{name}}</h2>
  <h2>{{greetUser()}}</h2>

  <!--Class binding -->
  <h2 [class]="successClass">{{'Welcome' + name}}</h2>
  <h2 [class.text-danger]="hasError">Danger</h2>
  <h2 [ngClass]="messageClass">Message Class</h2>

  <!-- Property binding-->
  <input class="form-control" [id]="myId" type="text" value="Shreya"><br>
  <input class="form-control" bind-disabled="isDisabled" type="text" value="shreya">

  <!--Style Binding-->
  <h2 [style.color]="hasError ? 'red' :'blue'">Style Binding</h2>

  <!--Event Binding-->
  <button (click)="onClick($event)">Greet</button><br>
  <button (click)="greeting='Welcome shreya'">Greet</button><br>
  {{greeting}}

<!--Template Refrence Variable -->
  `,
  styles: [`
   .text-success{ color : green ;}
   .text-danger{ color : red;}
  `]
})
export class TestComponent implements OnInit
{
  public name = "Shreya";
  public myId = "testId";
  public isDisabled = false;
  public successClass= "text-success";
  public hasError = true;
  public greeting = "";
  public messageClass =
  {
    "text-success": !this.hasError,
    "text-danger" : this.hasError

  }

  constructor() { }
  ngOnInit(): void {}

  greetUser()
  {
    return "Hello " + this.name;
  }

  onClick(event)
  {
     console.log(event);
     this.greeting="Welcome to Angular";
  }
}
