import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-chart',
  templateUrl: './vertical-chart.component.html',
  styleUrls: ['./vertical-chart.component.css']
})
export class VerticalChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  view: any[] = [600, 400];

  // options for the charts
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Sales';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  },
  {
    "name": "Germany",
    "value": 196750
  },
  {
    "name": "France",
    "value": 204617
  }
];

toggle(event,option){
  switch(option){
    case 'gradient':this.gradient = event.checked;break;
    case 'legend':this.showLegend = event.checked;break;
    case 'xlabel':this.showXAxisLabel = event.checked;break;
    case 'ylabel': this.showYAxisLabel = event.checked;
  }
}

}
