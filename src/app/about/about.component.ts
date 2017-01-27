import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  skateboard: string = "/skate1.jpg";

  constructor() { }

  ngOnInit() {
  }

}
