import { action, createStore } from 'easy-peasy';

export const store = createStore({
    appTitle: 'Recipe.In',
    activeRecipe: {
        id: 'A0001',
        title: 'Chocolate Cake',
        photo: 'recipe_pic_A0001.jpg',
        category: 'dessert',
        createdAt: "11/10/2020",
        prepTime: 45,
        prepUnit: 'min',
        serves: 2,
        ingredients: [
            '50 g of sugar',
            '100g of butter',
            '300g of flour'
        ]
    },
    setActiveRecipe: action((state, payload) => {
        state.activeRecipe = {...payload};
    }),
    recipes: [
        {
            id: 'A0001',
            title: 'Chocolate Cake',
            photo: 'recipe_pic_A0001.jpg',
            category: 'dessert',
            createdAt: "11/10/2020",
            prepTime: 45,
            prepUnit: 'min',
            serves: 2,
            ingredients: [
                '50 g of sugar',
                '100g of butter',
                '300g of flour'
            ]
        },
        {
            id: 'A0002',
            photo: 'recipe_pic_A0002.jpg',
            title: 'Cherry Cake',
            category: 'dessert',
            createdAt: "02/04/2019",
            prepTime: 35,
            prepUnit: 'min',
            serves: 4,
            ingredients: [
                '50 g of chocolate',
                '100g of butter',
                '4 eggs'
            ]
        },
        {
            id: 'A0003',
            photo: 'recipe_pic_A0003.jpg',
            title: 'Apple Pie',
            category: 'dessert',
            createdAt: "02/04/2019",
            prepTime: 35,
            prepUnit: 'min',
            serves: 4,
            ingredients: [
                '50 g of chocolate',
                '100g of butter',
                '4 eggs'
            ]
        },
        {
            id: 'A0004',
            photo: 'recipe_pic_A0004.jpg',
            title: 'Caramel Cake',
            category: 'dessert',
            createdAt: "02/04/2019",
            prepTime: 35,
            prepUnit: 'min',
            serves: 4,
            ingredients: [
                '50 g of chocolate',
                '100g of butter',
                '4 eggs'
            ]
        },
    ]
});