import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlist : any;

  constructor(private ruta : ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.playlist = this.ruta.snapshot.params['playlist'];
    console.log(this.playlist);
  }

}
