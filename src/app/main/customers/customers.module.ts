import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomersHomeComponent,
    CustomersDetailComponent,
    CustomersNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OntimizeWebModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
