import { Component, OnInit, } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts/google-charts-interfaces';
import { NavController } from '@ionic/angular';
import { User } from '../../user';
import { Storage } from '@ionic/storage';
import { MyTransaction } from '../../my-transaction';
//import { Chart } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit{
  public pieChart: GoogleChartInterface;
  TransactionsList : MyTransaction[] = new Array ();
  profile:User = new User();
  mTypesAndAmounts = new Map<string,number>();
  //StatsTypesAndAmounts = new Map<string,number>();
   
    constructor(private storage: Storage, private navController: NavController) {
     
      this.storage.get('user').then((val) => {
        this.profile = JSON.parse(val);  
    });

    this.storage.get('transactions').then((val) => {
      this.TransactionsList = JSON.parse(val);
      this.TransactionsList.forEach(transaction => {
        if  (transaction.recieverId != null ){
          
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
      //this.loadSimplePieChart(this.mTypesAndAmounts);
    }

    ngOnInit() {
    
    }
   // ionViewDidEnter() {
    //  this.loadSimplePieChart();
   // }
  
    createDoughnut(inDataMap: Map<string,number>) {

  
      console.log(inDataMap);
      
  
    }
  
  loadSimplePieChart(inDataMap) {
    console.log(inDataMap);
    this.pieChart = {
      chartType: 'PieChart',
      dataTable:  this.createDoughnut,
      opt_firstRowIsData: true,
      options: {
        'title': 'Typ',
        height: 600,
        width: '100%'
      },
    };
  }
    
    
   
  }