import { User } from "./user.model";

export interface Ingredient {
    name: string;
    quantity: string;
}

export interface Step {
    description: string;
    min?: number;
}

export interface Recipe {
    id: string;
    chef?: User;
    title: string;
    img: string;
    preparationMin: number;
    diners: number,
    ingredients: Ingredient[];
    steps: Step[];
}

export interface RecipeFilter {
    title: string;
    ingredient: string;
    preparationMin: number;
    diners: number;
}