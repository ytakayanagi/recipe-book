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
            'Spaghetti',
            'This is where the recipe description goes.',
            'https://source.unsplash.com/100x100/?spaghetti'
        ),
        new Recipe(
            'Hamburger',
            'This is where the recipe description goes.',
            'https://source.unsplash.com/100x100/?hamburger'
        )
    ];

    constructor() {}

    ngOnInit(): void {}

    onRecipeSelected(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }
}
