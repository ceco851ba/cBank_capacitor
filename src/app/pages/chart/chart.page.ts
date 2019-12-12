
import {Component, Directive, Input, ViewChild, OnInit ,ElementRef }from '@angular/core';
//import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { NavController } from '@ionic/angular';
import { User } from '../../user';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../../my-transaction';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})

/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
/////////////////////////////////////////NOT WORKING !!!!!!!!!!//////////////////////////////////////
export class ChartPage implements OnInit{
 // @ViewChild('lineCanvas',null) lineCanvas;
  @ViewChild("doughnutCanvas", null) doughnutCanvas: ElementRef;
 
  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();
  mTypesAndAmounts = new Map<string,number>();
  //StatsTypesAndAmounts = new Map<string,number>();
  private doughnutChart: Chart;
    constructor(private storage: Storage, private navController: NavController) {
     
      this.storage.get('user').then((val) => {
        this.profile = JSON.parse(val);  
    });

    this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);
      this.TransactionsList.forEach(transaction => {
        if  (transaction.recieverId == 0 ){
          
          this.TransactionsList.push(transaction);
            //if my map contains type than we add amount of transaction to value in map else we create new map record
            if(this.mTypesAndAmounts.has(transaction.transactionCategory)){
              this.mTypesAndAmounts.set(transaction.transactionCategory,(this.mTypesAndAmounts.get(transaction.transactionCategory) + transaction.amount));
            }
            else{
              this.mTypesAndAmounts.set(transaction.transactionCategory,transaction.amount)
        }

      }  
      });
      });
      this.createDoughnut(this.mTypesAndAmounts)
    }

    ngOnInit() {
    
    }
    
    
  
    public createDoughnut(inDataMap: Map<string,number>) {

      let bgColors = new Array();
      let bgHowerColors = new Array();
      inDataMap.forEach(()=>{
        bgColors.push( this.hexToRgbA(this.getRandomColor()));
        console.log("hex to rgbA = ", bgColors[bgColors.length-1]);
        bgHowerColors.push(this.getRandomColor());
      })
  
      console.log(inDataMap);
        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  
          type: "doughnut",
          data: {
            datasets: [
              {
                label: "Stats",
                data: Array.from( inDataMap.values() ),
                backgroundColor: bgColors,
                hoverBackgroundColor: bgHowerColors
              }
            ],
            labels: Array.from( inDataMap.keys() )
          },
          options:{
            legend:{
              position:'bottom'
            }
          }
        });
        
    }
  
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    hexToRgbA(hex){
      let c;
      c= hex.substring(1).split('');
      if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      // tslint:disable-next-line: no-bitwise
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',1)';
  }
  
   
  }