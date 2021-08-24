import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCollection().subscribe((dataList: any[]) => {
      console.log(dataList);
      this.data = dataList;
    });
  }
}
