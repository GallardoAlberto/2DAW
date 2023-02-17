import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist1: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const playlist1JSON = this.route.snapshot.queryParamMap.get('playlist1');
    if (playlist1JSON) {
      this.playlist1 = JSON.parse(playlist1JSON);
      console.log(this.playlist1);
    }
  }
  a(){
    console.log(this.playlist1);
  }
}