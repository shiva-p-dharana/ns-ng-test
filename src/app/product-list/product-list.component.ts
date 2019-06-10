import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit() {
  }

  share() {
    window.alert('This product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when product goes on sale.');
  }

}
