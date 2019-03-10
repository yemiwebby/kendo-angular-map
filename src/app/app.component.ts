import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#map").kendoMap({
        center: [30.2681, -97.7448],
        zoom: 3,
        layers: [{
          type: "tile",
          urlTemplate: "http://a.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
          attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>."
        }]
      });
    });
  }
}
