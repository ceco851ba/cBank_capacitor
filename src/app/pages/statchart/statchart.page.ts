import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User } from '../../user';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../../my-transaction';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-statchart',
  templateUrl: './statchart.page.html',
  styleUrls: ['./statchart.page.scss'],
})
export class StatchartPage implements OnInit {
  @ViewChild('PieChartCanvas',null) PieChartCanvas;

  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();
  
  chartDataFiltered = new Map<string,number>();
  myPieChart: any;

  constructor(private storage: Storage, private navController: NavController) {
    this.storage.get('user').then((val) => 
  {
    this.profile = JSON.parse(val);  
  });

  this.storage.get('transactions').then((val) => {
    this.TransactionsList = JSON.parse(val);
    this.TransactionsList.forEach(transaction => {
      if (transaction.recieverId > transaction.senderId ){   ///Receiver ID null --> outgo transaction 
        
        this.TransactionsList.push(transaction);
          
        if(this.chartDataFiltered.has(transaction.transactionCategory))
          {
            this.chartDataFiltered.set(transaction.transactionCategory,(this.chartDataFiltered.get(transaction.transactionCategory) + transaction.amount));
          }
        else
          {
            this.chartDataFiltered.set(transaction.transactionCategory,transaction.amount)
          }
          }  
          });
      this.generatePieChart(this.chartDataFiltered)
          });

  }

  ngOnInit() {}

  public generatePieChart(ChartDataFilteredMap: Map<string,number>) {
    let GraphBackgroundClr = new Array();
    let GraphBackgroundHowerClr = new Array();
      ChartDataFilteredMap.forEach(()=>{
      GraphBackgroundClr.push(this.ConvHexadecimalToRGBa(this.RandomClrGenerator()));
      console.log("Converted Hexadecimal to RGBa= ", GraphBackgroundClr[GraphBackgroundClr.length-1]);
      GraphBackgroundHowerClr.push(this.RandomClrGenerator());
    })

    console.log(ChartDataFilteredMap);
    this.myPieChart=new Chart(this.PieChartCanvas.nativeElement, 
      {
        type: "pie",
        
        data: {
          datasets: [
            {
              label: "Stats",
              data: Array.from( ChartDataFilteredMap.values() ),
              backgroundColor: GraphBackgroundClr,
              hoverBackgroundColor: GraphBackgroundHowerClr,
              borderColor:'black',
              borderWidth: 2 
              
            }
          ],
          labels:
          Array.from( ChartDataFilteredMap.keys()  ),
          
        },
         options:{
         
          legend: 
          {
            
            display: true,
            labels: { 
                fontColor: "#000080",
            }, 
            position:'bottom'
          },
          
            }
      });
      
  }

 
  ConvHexadecimalToRGBa(hex){
    let clr;
    clr= hex.substring(1).split('');
    if(clr.length== 3){
          clr= [clr[0], clr[0], clr[1], clr[1], clr[2], clr[2]];
    }
    clr= '0x'+clr.join('');
    return 'rgba('+[(clr>>16)&255, (clr>>8)&255, clr&255].join(',')+',1)';
}

RandomClrGenerator() {
  const letters = '0123456789ABCDEF';
  let randomColor = '#';
  for (var i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

gotoTransButtonOnclick(){
  this.navController.navigateRoot("tabs/tab2");
}

returnToProfileButtonOnclick(){
  this.navController.navigateRoot("tabs/tab1");
}

}
