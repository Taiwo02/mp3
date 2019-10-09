import { Injectable,OnInit } from '@angular/core';
import { musicfiles } from './allsongs';
  import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Mp3serviceService {
  
  constructor() {
   
    setInterval((()=>{
     this.timing();
    }),1000);
   
   }
  
    musicFiles =  musicfiles
    public pl:string='play'; public lent=0; public le:boolean=false;
    public sec:boolean=false; public pu:boolean=false; public prog = 50;
    public file; public filer;  public playList=[];count=0; public pn;
    public all=[]; public two=[]; au:boolean=false; move; ao:boolean=false;
    reciever=[]; recover=[]; public sence:boolean = true; public event: number;
    public progressRate:number; public current=0; public rep:boolean = false;
    public rand:boolean = false; public vig: any[]; public time; public play_list;
    timeControl:boolean=false; public selectedMusic; public Index:number;public st:boolean=false;
    dura(){
      for(var x=0; x<this.play_list.songs.dir; x++)
      // new Audio(this.play_list.songs.dir[x])
       console.log(this.play_list.songs.dir[x])
    }
  chooseplaylist(PLAYLIST){
    this.play_list = PLAYLIST
   this.dura()
  }
 
   

  playMusic(f){
    this.selectedMusic = f;
    this.progressRate=0;   
   this.Index=this.play_list.songs.indexOf(f);

    if(this.file){
      this.file.pause();
    }
    if (this.selectedMusic) {
      this.progressRate=0;
      this.filer = new Audio(this.selectedMusic.dir);
      this.file = this.filer;
      this.file.load();
      this.file.play();
      
      
      this.pu=true;
      this.sec=true;
      this.timeControl=true;
    }
    
  }
  
  play(){
    if(!this.pu){
      if(this.file){
        this.file.play();
        this.pu = true;
        this.st=false;
      }
      else{
        this.playMusic(this.play_list.songs[0]);
      }
    }
}

timing(){
  if(this.timeControl){
  let munite = Math.trunc (this.file.currentTime/60);
  let seconds = Math.trunc(this.file.currentTime);
  seconds = seconds-60*munite;
  this.time = munite+":"+seconds;
  if (this.file.ended && this.rep) {
    this.file.loop;
    this.file.play();
  } else if (this.file.ended && this.rand) {
    console.log(this.vig);
   return this.vig = [Math.floor(Math.random()*this.vig.length)];
  
  }
   else if(this.file.ended && !this.rep) {
    this.next()
  }
  if(munite<=0){
    munite=0+munite;
  }else{
    munite
  }
}
}

next(){
  if (this.Index>=0) {
   //  this.anything.selectedMusic=this.anything.play_list.songs[this.anything.Index+1]
   this.selectedMusic=this.play_list.songs[this.Index+1];
   this.playMusic(this.selectedMusic);
    
  } 
 //  else {
  

 //  }
 }
 
 
  
  ngOnInt(){}

}
