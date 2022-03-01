import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';


@NgModule({
  declarations: [AccountsHomeComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
