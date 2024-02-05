import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-service-ex-card',
  templateUrl: './service-ex-card.component.html',
  styleUrls: ['./service-ex-card.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.home-card]': 'true'
  },
  providers: [StarWarsService]
})
export class ServiceExCardComponent implements OnInit {
  filmsAmount: number;
  private subscription: Subscription;

  constructor(
    private starwars: StarWarsService,
    private cd: ChangeDetectorRef
  ) {
    this.subscription = this.starwars.query({}, ['uuid'], 'films').subscribe({
      next: (res: any) => {
        if (res.data && res.data.length) {
          this.filmsAmount = res.data.length;
        } else {
          this.filmsAmount = undefined;
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
