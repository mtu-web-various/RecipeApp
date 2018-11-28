import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Description of the Test Recipe', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/44/94/43/nefis-karisik-kebap.jpg'),
    new Recipe('A Test Recipe', 'Description of the Test Recipe', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/44/94/43/nefis-karisik-kebap.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
