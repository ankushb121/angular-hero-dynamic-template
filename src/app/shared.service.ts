import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 static getAppTemplate(): string {
    let template = `<h1>{{title}}</h1>
<nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>`;

    return template;
  }
  static getDashboardTemplate(): string {
    let template = `<h2>Top Heroes</h2>
    <div class="heroes-menu">
      <a *ngFor="let hero of heroes"
          routerLink="/detail/{{hero.id}}">
          {{hero.name}}
      </a>
    </div>
    
    <app-hero-search></app-hero-search>`;

    return template;
  }

  static getHeroDetails(): string {
    let template = `<div *ngIf="hero">
    <h2>{{hero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{hero.id}}</div>
    <div>
      <label for="hero-name">Hero name: </label>
      <input id="hero-name" [(ngModel)]="hero.name" placeholder="Hero name"/>
    </div>
    <button (click)="goBack()">go back</button>
    <button (click)="save()">save</button>
  </div>
  `;

    return template;
  }
  static getHeroSearchTemplate(): string {
    let template = `<div id="search-component">
    <label for="search-box">Hero Search</label>
    <input #searchBox id="search-box" (input)="search(searchBox.value)" />
  
    <ul class="search-result">
      <li *ngFor="let hero of heroes$ | async" >
        <a routerLink="/detail/{{hero.id}}">
          {{hero.name}}
        </a>
      </li>
    </ul>
  </div>
  `;

    return template;
  }
  static getHeroTemplate(): string {
    let template = `<h2>My Heroes</h2>

    <div>
      <label for="new-hero">Hero name: </label>
      <input id="new-hero" #heroName />
    
      <!-- (click) passes input value to add() and then clears the input -->
      <button class="add-button" (click)="add(heroName.value); heroName.value=''">
        Add hero
      </button>
    </div>
    
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <a routerLink="/detail/{{hero.id}}">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </a>
        <button class="delete" title="delete hero"
          (click)="delete(hero)">x</button>
      </li>
    </ul>`;

    return template;
  }
  static getMessagesTemplate(): string {
    let template = `<div *ngIf="messageService.messages.length">

    <h2>Messages</h2>
    <button class="clear"
            (click)="messageService.clear()">Clear messages</button>
    <div *ngFor='let message of messageService.messages'> {{message}} </div>
  
  </div>`;

    return template;
  }
}
