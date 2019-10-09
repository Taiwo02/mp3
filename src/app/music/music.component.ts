import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
    fill:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  add(){
  if(this.fill==false) {
    this.fill=true
  } else {
    this.fill=false;
  }
  }
}
