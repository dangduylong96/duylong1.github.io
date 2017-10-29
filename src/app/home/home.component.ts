import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService],
})
export class HomeComponent implements OnInit {

  // lasted_product: any;
  // top_view: any;
  constructor(
    private proService: ProductService 
  ){}

  ngOnInit() {
    // this.loadata();
  }
  // loadata() {
  //   this.proService.getpro_top_10()
  //     .subscribe(res => {
  //       this.lasted_product = res;
  //     })
  //   this.proService.getpro_top_view()
  //     .subscribe(res => {
  //       this.top_view = res;
  //     })
  // }
}
