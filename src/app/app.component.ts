import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#map").kendoMap({
        center: [51.505, -0.09],
        zoom: 6,
        layers: [{
          type: "tile",
          urlTemplate: "http://a.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
          attribution: "&copy; <a href='http://osm.org/copyright'>OpenStreetMap contributors</a>."
        }],
        markers: [{
          location: [52.4862, -1.8904],
          shape: "pinTarget",
          tooltip: {
            content: "Austin, TX"
          }
        }]
      });
    });
  }
}
