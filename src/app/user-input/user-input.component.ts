import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataType } from './data';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculator = new EventEmitter<{initialInvestment: number, duration: number, 
    expectedReturn: number, annualInvestment: number}>();

  data?: DataType;

  enteredInitialInvestment = '0';
  enteredAnnaulInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '0';


  onSubmit(){
   this.calculator.emit({
    initialInvestment: +this.enteredInitialInvestment,
    annualInvestment: +this.enteredAnnaulInvestment,
    expectedReturn: +this.enteredExpectedReturn,
    duration : +this.enteredDuration
   })
  }
}
