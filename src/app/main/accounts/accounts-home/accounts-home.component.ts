import { Component } from '@angular/core';
import { intRateMonthlyFunction } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './accounts-home.component.html',
  styleUrls: ['./accounts-home.component.css']
})
export class AccountsHomeComponent {

  public intRateMonthly = intRateMonthlyFunction

}