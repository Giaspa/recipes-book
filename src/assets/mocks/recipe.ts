import { Recipe } from "src/app/model/recipe.model";

export const recipesMock: Recipe[] = [
    {
        id: "recipe-mock-0",
        title: "Beer-glazed chicken",
        img: "assets/img/Pollo-glassato-alla-birra.jpg",
        preparationMin: 50,
        diners: 4,
        ingredients: [
            {
                name: "Chicken thighs",
                quantity: "4",
            },
            {
                name: "Beer",
                quantity: "600 ml",
            },
            {
                name: "Red onion",
                quantity: "1",
            },
            {
                name: "Garlic",
                quantity: "1",
            },
            {
                name: "Rosemary",
                quantity: "1",
            },
            {
                name: "Bay leaves",
                quantity: "2",
            },
            {
                name: "Spoons of honey",
                quantity: "3",
            },
            {
                name: "Oil",
                quantity: "q.b.",
            },
            {
                name: "Salt",
                quantity: "q.b.",
            },
            {
                name: "Pepper",
                quantity: "q.b.",
            },
        ],
        steps: [
            {
                description: "In a large frying pan, heat the oil and brown the chicken on all sides, then remove from the pan and keep aside.",
            },
            {
                description: "Add the finely chopped onions, garlic, rosemary and bay leaf and cook for 10 minutes.",
                min: 10,
            },
            {
                description: "Deglaze with half of the beer and allow to evaporate.",
            },
            {
                description: "Then add the chicken, salt, pepper and the remaining beer and cook with a lid on low heat for 30 minutes.",
                min: 30,
            },
            {
                description: "Brush with honey and bake over a high flame for 5 minutes to glaze well.",
                min: 5,
            },
            {
                description: "Serve the chicken!",
            },
        ],
    }
]