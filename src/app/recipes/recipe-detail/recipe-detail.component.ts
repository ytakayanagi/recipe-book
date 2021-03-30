import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

interface Option {
    name: string;
}

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    @Input() recipe: Recipe;
    options = [];

    selectedOption: Option;

    constructor() {
        this.options = [
            { name: 'To Shopping List' },
            { name: 'Edit Recipe' },
            { name: 'Delete Recipe' }
        ];
    }

    ngOnInit(): void {}
}
