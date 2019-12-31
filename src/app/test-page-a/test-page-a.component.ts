import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'projects/ngx-google-analytics/src/public_api';

@Component({
  selector: 'app-test-page-a',
  templateUrl: './test-page-a.component.html',
  styleUrls: ['./test-page-a.component.css']
})
export class TestPageAComponent implements OnInit {

  constructor(
    protected $gaService: GoogleAnalyticsService
  ) { }

  ngOnInit() {
    this.$gaService.addTrackerId('config', 'UA-17886362-3', 'Operator');
  }

  onEvent() {
    this.$gaService.event('mine', 'yours', 'theirs');
  }

}
