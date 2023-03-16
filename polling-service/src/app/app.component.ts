import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { PollingService } from './services/polling.service';

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
    this.pollingService.pollData(10).subscribe((value) => {
      console.log(`emit ${value}`, `Seconds: ${new Date().getSeconds()}`);
      //this.posts$ = this.dataService.getPosts();
    });
  }
}
