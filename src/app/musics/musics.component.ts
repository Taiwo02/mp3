import { Component, OnInit } from '@angular/core';
import { Mp3serviceService} from '../mp3service.service';
import {FormsModule} from '@angular/forms'
import { all } from 'q';
import { parse } from 'querystring';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { nextContext } from '@angular/core/src/render3';
// import { NgIf } from '@angular/common';
// import { getOrCreateCurrentQueries } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-musics',
  templateUrl: './musics.component.html',
  styleUrls: ['./musics.component.css']
})
export class MusicsComponent implements OnInit {
 varrr;
    constructor(private anything: Mp3serviceService) {
      if(!this.anything.play_list){
        this.anything.play_list = this.anything.musicFiles[0].playlist;
        
      }       
    }

  
  ngOnInit() {
  
    }
   



}
