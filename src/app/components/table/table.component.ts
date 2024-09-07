import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'A-tech-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  value: string | undefined;
  //   this variable is for primeng switch
  checked: boolean = false;
  //   Data of the customer which in real project will get from Backend as API's Shape
  customers: [] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    //   Get the data from the API
    this.http.get('assets/data.json').subscribe((data: any) => {
      this.customers = data;
    });
  }
}
