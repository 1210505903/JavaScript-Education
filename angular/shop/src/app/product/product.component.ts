import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  constructor(){ }

  title="Ürünler Listelendi"

  products : any[] =[
    {id:1, name:"Fare", price:1000,categoryId:1, description:"4Tech"},
    {id:2, name:"Leptop", price:15000, categoryId:3,descripton:"Asus"}
  ];

  ngOnInit() {
    
  }
}
