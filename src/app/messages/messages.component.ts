import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-messages',
  template: SharedService.getMessagesTemplate(),
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/