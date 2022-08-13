import { Component, OnInit } from '@angular/core';
import { LoadingStore } from './LoadingStore';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  constructor() {}
  loading: boolean | null = null;

  ngOnInit() {
    const loadingStore = LoadingStore.getInstance();
    loadingStore.get$().subscribe((value) => (this.loading = value));
  }
}
