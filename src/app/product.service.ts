import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  top_10_pro=[];
  data:any;
  constructor(
    private http:Http
  ) { }
  // getpro_top_10():Observable<any[]>
  // {
  //   return this.http.get('http://localhost:90/Angular%204/first-shop/php-backend/product.php')
  //   .map((Response:Response)=>Response.json())
  // }
  // getpro_top_view():Observable<any[]>
  // {
  //   return this.http.get('http://localhost:90/Angular%204/first-shop/php-backend/getpro_top_view.php')
  //   .map((Response:Response)=>Response.json())
  // }
}
