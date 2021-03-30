import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'Pasta',
            'This is where the recipe description goes.',
            'https://source.unsplash.com/r01ZopTiEV8/',
            5
        ),
        new Recipe(
            'Hamburger',
            'This is where the recipe description goes.',
            'https://source.unsplash.com/sc5sTPMrVfk/',
            4
        )
    ];

    constructor() {}

    ngOnInit(): void {}

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
