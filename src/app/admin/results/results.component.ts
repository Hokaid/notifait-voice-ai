import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatChipInputEvent} from "@angular/material/chips";
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface CampaignElement {
  position: number,
  campaign: string;
  dni_deudor: string;
  dllamada: string;
  entidad: string;
  estado: string;
  horafin: string;
  horainicio: string;
  idcall: string;
  idcampaign: string;
  deuda: number;
  deudor: string;
  telefono: string;
}

const ELEMENT_DATA: CampaignElement[] = [
  {position: 1, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 2, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 3, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 4, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 5, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 6, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 7, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 8, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 9, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 10, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 11, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 12, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 13, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 14, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 15, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 16, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 17, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 18, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 19, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
  {position: 20, campaign: "Paralelo 03", dni_deudor: "11110292", dllamada: "00:00:00", entidad: "Edpyme Alternativa", estado: "Buzón de voz", horafin: "2021-04-0707:57:20", horainicio: "2021-04-07 07:57:19", idcall: "CALL_20210407_00014", idcampaign: "CAMPAIGN_20210407_00005", deuda: 1188.78, deudor: "Gibi pink", telefono: "977496905"},
];

export interface Filtro {
  name: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'campaign', 'dni_deudor', 'dllamada', 'entidad', 'estado', 'horafin', 'horainicio', 'idcall', 'idcampaign', 'deuda', 'deudor', 'telefono'];
  dataSource: MatTableDataSource<CampaignElement>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nullresult: boolean = false;
  myControl = new FormControl();
  options: string[] = ['Paralelo 03', 'Paralelo 02', 'Kevin Test Paralelos 01', 'TS01', 'Paralelo 01'];
  filteredOptions: Observable<string[]>;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onBuscar() {
    if (this.nullresult == true) {
      this.nullresult = false;
    } else { this.nullresult = true; }
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filtros: Filtro[] = [
    {name: 'Pendiente'},
    {name: 'En curso'},
    {name: 'Pagara hoy'},
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.filtros.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(filtro: Filtro): void {
    const index = this.filtros.indexOf(filtro);

    if (index >= 0) {
      this.filtros.splice(index, 1);
    }
  }
}
