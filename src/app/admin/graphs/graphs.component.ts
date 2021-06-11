import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {
  //Grafico 1 Bars
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [30, 40, 40, 30, 35, 28, 30], label: 'Deudas cargadas' },
    { data: [21, 20, 28, 18, 22, 19, 18], label: 'Deudas completadas' }
  ];
  public barchartColors: Array<any> = [
    { backgroundColor: '#2B2E4A' },
    { backgroundColor: '#CEC3EE' }];
 
  //Grafico 2 Bars
  public bar2ChartLabels: Label[] = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
  public bar2ChartData: ChartDataSets[] = [
    { data: [30, 80, 75, 30, 35, 65, 40], label: 'Pagado' },
    { data: [70, 20, 25, 70, 65, 35, 60], label: 'No pagado' }
  ];
  public bar2chartColors: Array<any> = [
    { backgroundColor: '#E84545' },
    { backgroundColor: '#FF7777' }];

  //Grafico 3 Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Pagado', 'No pagado', 'Estado 5', 'Estado 4', 'Estado 3'];
  public pieChartData: SingleDataSet = [300, 500, 100, 100, 200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public piechartColors: Array < any > = [{
   backgroundColor: ['#544E98', '#CEC3EE', '#716CAA', '#8284BF', '#A59ED3']
  }];

  //Autocomplete
  myControl = new FormControl();
  options: string[] = ['Paralelo 03', 'Paralelo 02', 'Kevin Test Paralelos 01', 'TS01', 'Paralelo 01'];
  filteredOptions: Observable<string[]>;

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngOnInit(): void {
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
