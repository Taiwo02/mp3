import { Component, OnInit,Input,Output} from '@angular/core';
import { Mp3serviceService} from '../mp3service.service';
import { from } from 'rxjs';
import { EventEmitter } from 'events';
import { when } from 'q';
import { forEach } from '@angular/router/src/utils/collection';
import { NgForOf } from '@angular/common';
import { AyefeleComponent } from '../ayefele/ayefele.component';
import { MusicComponent } from '../music/music.component';

@Component({
  selector: 'app-tope-alabi',
  templateUrl: './tope-alabi.component.html',
  styleUrls: ['./tope-alabi.component.css']
})
export class TopeAlabiComponent implements OnInit {
  // @Output()   childEvent=new EventEmitter();
    all=[];
  // :any[]=[
  //   {music:'music'},
  //   {aye:'ayefele'},
  //   {tope:'Tope alabi'},
  //   {ara:'Baba ara'}
  // ];
//      music=[];
//       aye=[];
//       tope=[];
//      ara=[]
//    menue;
//    au;
  

  constructor(private anything: Mp3serviceService) {
    
   }
  ngOnInit() {
    // this.all.push(this.music, this.aye,this.tope,this.ara);
    // this.music=this.anything.musicFiles;
    // this.aye=this.anything.Ayeefele;
    // this.tope=this.anything.Tope;
    // this.ara=this.anything.Ara;
  //  for (let i=0; i< this.all.length;i++) {
  //      console.log(this.all[i])
  //  }

      
     
    // this.aye=this.anything.musicFiles;
    // this.ayefele=aye.name="Ayefele"
    // this.aye.push(this.anything.musicFiles);

  }

//   ayef(){
//     this.music=this.aye;
    
   
//   }
//   send(file){
//     this.menue=file.dir;
//     this.au=new Audio(this.menue)
//      this.au.play();
  //  alert(this.menue)
 
//   }

}
