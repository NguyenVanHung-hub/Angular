import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {}
   //Tạo 1 danh sách sản phẩm
  products = [
    { name: 'sản phẩm 1', price: 12000,  mota: 'day la mot san pham dep, phuf hop' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
    { name: 'sản phẩm 2', price: 15000,  mota: 'day la mot san pham dep, phuf hop', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
    { name: 'sản phẩm 3', price: 10000,  mota: 'day la mot san pham dep, phuf hop', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
    { name: 'sản phẩm 4', price: 9000, mota: 'day la mot san pham dep, phuf hop' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
    { name: 'sản phẩm 5', price: 8000, mota: 'day la mot san pham dep, phuf hop', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
    { name: 'sản phẩm 6', price: 6000, mota: 'day la mot san pham dep, phuf hop', img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg' },
    { name: 'sản phẩm 7', price: 7000, mota: 'day la mot san pham dep, phuf hop' , img :'https://oldsailor.com.vn/vnt_upload/product/c224b6ca-9f1c-49a5-9d5f-fc45f05dd12f.jpg'},
  ];
  getProduct() {
   
    return this.products;
  }
}
