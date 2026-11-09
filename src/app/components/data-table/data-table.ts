import { Component,Input,input, InputSignal, Signal } from '@angular/core';
import { TableData } from '../../classes/table-data';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.html',
  styleUrl: './data-table.scss',
})
export class DataTable {
  cells = input.required<TableData[]>();
}
