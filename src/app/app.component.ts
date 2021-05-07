import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  template: SharedService.getAppTemplate(),
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  innerHtml;
  tempData
  constructor(private heroService: HeroService){
  }
  ngOnInit(){
  }

 
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/