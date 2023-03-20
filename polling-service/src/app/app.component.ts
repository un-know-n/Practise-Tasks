import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { PollingService } from './services/polling.service';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts$ = this.dataService.getPosts();

  constructor(
    private dataService: DataService,
    private pollingService: PollingService,
  ) {}

  ngOnInit(): void {
    this.pollingService
      .pollData()
      .pipe(timeInterval())
      .subscribe(({ value, interval }) => {
        console.log(
          `Emit #${value}`,
          ' || ',
          `From last emit: ${(interval / 1000).toFixed(0)} s.`,
        );
      });
  }
}
