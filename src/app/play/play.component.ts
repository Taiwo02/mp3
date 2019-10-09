import { Component, OnInit,Input } from '@angular/core';
import{Mp3serviceService} from '../mp3service.service'
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

public pl:string='play'; public sec:boolean=false;
public prog = 50;  public playList=[];
public all=[]; move; public sence:boolean = true; 
public add:any[]=[];  public sin:boolean=true;  public arr;
public creat:string; public mu; public event: number;
public progressRate:number; public current=0;public pn; sea;
public v:boolean=false; public //rep:boolean = false;
public rand:boolean = false; public vig = [];


  constructor(private anything:Mp3serviceService) {
    setInterval((()=>{this.progress(); }),500);
    this.event = 50;      
    this.progressRate=0;
   }
  progress(){
    if(this.anything.file){
    //  this.anything.file.onplaying = ()=>{
     return this.progressRate= +((this.anything.file.currentTime/this.anything.file.duration) *100);  
              // }
      }
      else{
        return this.progressRate=0;
      }
  }

   pauseMusic(){
    if (this.anything.pu){
        this.anything.pu = false;
        this.anything.file.pause();
       console.log (this.anything.play_list)
       this.progressRate=0;
    }   
   

  };
 

back(){ 
if (this.anything.Index>=0) {
  this.anything.selectedMusic=this.anything.play_list.songs[this.anything.Index]
} 
  this.anything.selectedMusic=this.anything.play_list.songs[this.anything.Index-1];
    this.anything.playMusic(this.anything.selectedMusic);


} 
 

public vo:boolean=false
public cd=0;
public output;

volume(){
      this.anything.file.volume = 1*(this.event/100);
    if (this.anything.file.volume>=0.1) {
      this.v=false;
      
    } else if (this.anything.file.volume==0) {
      this.v=true;
    }
}
pro(){
if(this.anything.file){
  this.anything.file.currentTime=(this.progressRate)*(this.anything.file.duration/100);
  this.progressRate=((this.anything.file.currentTime*this.anything.file.duration)/100);}
}
v1(){
  this.v=true;
  this.anything.file.volume=0;
}
v2(){
  this.v=false;
  this.anything.file.volume=0.5;
}

repeat(){
  if (this.anything.file && this.anything.rep==false) {this.anything.rep=true}
   else if(this.anything.file && this.anything.rep==true){ this.anything.rep=false;}
}
  sto(){
    if(this.anything.file && this.anything.st==false ){
   this.anything.st=true;
   this.anything.file.currentTime=0;
   this.pauseMusic();
    }
    else{this.anything.st=false}
}



  ngOnInit() {  } 
  
}
