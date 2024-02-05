import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OntimizeService } from 'ontimize-web-ngx';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  }
})
export class AccountCardComponent implements OnInit {
  accountAmount: any;
  private subscription: Subscription;

  constructor(
    private ontimizeService: OntimizeService,
    private cd: ChangeDetectorRef
  ) {
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('branches'));
    this.subscription = this.ontimizeService.query(void 0, ['ACCOUNTID'], 'accountBalance').subscribe({
      next: (res: any) => {
        if (res && res.data.length) {
          this.accountAmount = res.data.length;
        }
      },
      error: (err: any) => console.log(err),
      complete: () => this.cd.detectChanges()
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}