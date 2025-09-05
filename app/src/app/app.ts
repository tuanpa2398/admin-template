import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  appState = { 
    page: 'blank', 
    loaded: true, 
    darkMode: false, 
    stickyMenu: false, 
    sidebarToggle: false, 
    scrollTop: false 
  }

  sidebarToggle: boolean = false;

  constructor(

  ) { }

  ngOnInit(): void {

  }

  watchUrl() {

  }
}
