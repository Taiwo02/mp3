import { Component, OnInit } from '@angular/core';
// import{Title}from '../mp'
// import{TITLE}from '../mock-mp3'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-ayefele',
  templateUrl: './ayefele.component.html',
  styleUrls: ['./ayefele.component.css']
})
export class AyefeleComponent implements OnInit {
  // music=TITLE;
  
public musicFiles = [];
public cTitle = "Ayefele bitter xperience";
 public pl:string='play';
 public lent="";
 public con:boolean=false
 public pu=false;
public file = new Audio();

 ngOnInit() {

//    this.musicFiles.push({title: 'Ayefele bitter xperience', dir: 'assets/musics/experience.mp3',pl:"play"});
//    this.musicFiles.push({title: 'Ayefele Prayer Point', dir: 'assets/musics/Ayefele/pp.mp3',pl:"play"});
//    this.musicFiles.push({title: 'Ayefele new dawn 1', dir: 'assets/musics/Ayefele/Ayefele new dawn 1000.mp3',pl:"play"});
//    this.musicFiles.push({title: 'Ayefele New Dawn 2', dir: 'assets/musics/Ayefele/nd.mp3',pl:"play"});
//    this.musicFiles.push({title: ' Ayefele_Sweet Experience', dir: 'assets/musics/Ayefele/Yinka Ayefele_Sweet Experience_Track 6.mp3',pl:"play"});
//    this.musicFiles.push({title: 'Ayefele Comforter 2', dir: 'assets/musics/Ayefele/Ayefele Comforter 2 .mp3',pl:"play"});
//    this.musicFiles.push({title: 'Ayefele gratitiude 1', dir: 'assets/musics/Ayefele/Ayefele gratitiude 1.mp3',pl:"play"});
//    this.musicFiles.push({title: 'AYEFELE  Divine intervention 3', dir: 'assets/musics/Ayefele/D I 3.mp3',pl:"play"});
  
 }

//  playMusic(f){

//    this.pl=f.pl;
  //  if (this.pl=="pause") {
  //    this.pl=f.pl="play";
  //    this.file.pause();
  //    this.con=f.con=false;

  //  } 
   // this.file.pause();
  //  else if(this.pl=="play"){
//      this.pl="pause"
//    this.file.src = f.dir;
//    this.cTitle = f.title;
//    this.file.play();
//    this.lent=f.dir.length;
//    this.pl=f.pl="pause";
//    this.pl="pause";
//   this.con=f.con=true;
//   this.pu=true;
//  }
//  pauseMusic(f){
//    this.file.pause();
//    if (this.pl=="pause") {
//      this.file.pause();
//        this.pl="play"
//        this.pu=false;
//    }
//     else if(this.pl=="play"){
//     this.file.play()
//       this.pl="pause"
//       this.pu=true;
//    }
//    this.cTitle = this.cTitle;
//  }
  constructor() { }

}
