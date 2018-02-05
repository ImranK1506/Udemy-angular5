import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-server',
  templateUrl: './multi-server.component.html',
  styleUrls: ['./multi-server.component.css']
})
export class MultiServerComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  createServer() {
    this.serverCreationStatus = 'Server was created.';
  }

}
