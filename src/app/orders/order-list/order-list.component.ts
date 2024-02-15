import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

const ELEMENT_DATA = [
  {
    orderDate: new Date(),
    orderNumber: 100,
    total: 29.99,
    description: '2lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 101,
    total: 39.99,
    description: '5lbs of tuna',
    isChecked: false,
  },
  {
    orderDate: new Date(),
    orderNumber: 102,
    total: 59.99,
    description: '1lbs of tuna',
    isChecked: false,
  },
];

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  displayColumns: string[] = ['action', 'orderNumber', 'orderDate', 'description', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  length = 100;
  pageIndex = 0;
  pageSize = 2;
  pageSizeOptions = [1, 2, 5, 10];

  @ViewChild(MatSort) sort: MatSort = new MatSort;;

  pageEvent: PageEvent = new PageEvent;

  constructor() {}

  loadData(pageIndex: number, pageSize: number): void {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA.slice(pageIndex, pageIndex + pageSize));
  }

  ngOnInit(): void {
    this.loadData(this.pageIndex, this.pageSize);
    this.dataSource.sort = this.sort;
  }

  selectAll() {
    ELEMENT_DATA.forEach(el => {
      el.isChecked = !el.isChecked
    });
  }

  onPageChange(e: PageEvent) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.loadData(this.pageIndex, this.pageSize);
  }
}
