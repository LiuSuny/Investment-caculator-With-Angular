import { Component, EventEmitter, inject, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from './investmentInput';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  //@Output() calculator = new EventEmitter<InvestmentInput>();
  //calculator = output<InvestmentInput>();


  investmentService = inject(InvestmentService);

  enteredInitialInvestment = signal('20');
  enteredAnnaulInvestment = signal('30');
  enteredExpectedReturn = signal('10');
  enteredDuration = signal('4');


  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnaulInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration : +this.enteredDuration()
     })
  this. enteredInitialInvestment.set('0');
  this.enteredAnnaulInvestment. set('0');
  this.enteredExpectedReturn.set('0');
  this.enteredDuration.set('0');
  }
}
