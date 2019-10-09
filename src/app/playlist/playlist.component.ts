import { Component, OnInit,Input } from '@angular/core';
import{Mp3serviceService} from '../mp3service.service'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
 playlist=[];
// b=[];
message="";

// @Input() public parentData
  constructor(private anythin:Mp3serviceService) { }
    
  ngOnInit() {
    this.playlist=this.anythin.musicFiles;
 
    // this.a=this.anythin.musicFiles
      // this.t=this.anythin.Tope
      // this.b=this.anythin.Babaara
    

  }
  // this.all.push(this.anythin.musicFiles)

}
