import { Component, OnInit } from '@angular/core';
import { Category } from './Category';
import { HttpClient } from '@angular/common/http'
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private http:HttpClient,private categoryService:CategoryService) { }
  categories: Category[]
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }
}
