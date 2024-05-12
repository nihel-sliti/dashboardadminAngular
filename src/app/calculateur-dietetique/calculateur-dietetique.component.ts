import { Component} from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';


@Component({
  selector: 'app-calculateur-dietetique',
  templateUrl: './calculateur-dietetique.component.html',
  styleUrl: './calculateur-dietetique.component.css'
})
export class CalculateurDietetiqueComponent {
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Suivi Calorique Quotidien'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6', 'Jour 7', 'Jour 8']
    },
    yAxis: {
      title: {
        text: 'Calories'
      }
    },
    series: [
      {
        name: 'Calories Consommées',
        data: [2200, 2100, 2300, 2400, 2500, 2400, 2300, 2200]
      }
    ] as any
  });
  

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Macros',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Glucides', y: 10, color: '#eeeeee' },
  
          { name: 'Protéines', y: 5, color: '#393e46' },
  
          { name: 'Lipides', y: 5, color: '#00adb5' },
        ],
      },
    ],
  })
  
}
