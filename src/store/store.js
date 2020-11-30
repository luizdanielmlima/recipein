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
            {
                amount: '150',
                unit: 'g',
                ingredient: 'sugar'
            },
            {
                amount: '100',
                unit: 'g',
                ingredient: 'butter'
            },
            {
                amount: '300',
                unit: 'g',
                ingredient: 'flour'
            },
            {
                amount: '1',
                unit: 'tbsp',
                ingredient: 'chocolate powder'
            },

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
                {
                    amount: '150',
                    unit: 'g',
                    ingredient: 'sugar'
                },
                {
                    amount: '1/2',
                    unit: 'g',
                    ingredient: 'butter'
                },
                {
                    amount: '300',
                    unit: 'g',
                    ingredient: 'flour'
                },
                {
                    amount: '1',
                    unit: 'cup',
                    ingredient: 'fresh strawberries'
                },
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
                {
                    amount: '150',
                    unit: 'g',
                    ingredient: 'sugar'
                },
                {
                    amount: '1/2',
                    unit: 'cup',
                    ingredient: 'vegetable oil'
                },
                {
                    amount: '300',
                    unit: 'g',
                    ingredient: 'flour'
                },
                {
                    amount: '1',
                    unit: 'cup',
                    ingredient: 'frozen cherries'
                },
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
                {
                    amount: '150',
                    unit: 'g',
                    ingredient: 'sugar'
                },
                {
                    amount: '1/2',
                    unit: 'cup',
                    ingredient: 'canola oil'
                },
                {
                    amount: '300',
                    unit: 'g',
                    ingredient: 'flour'
                },
                {
                    amount: '3',
                    unit: '',
                    ingredient: 'apples'
                },
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
                {
                    amount: '150',
                    unit: 'g',
                    ingredient: 'sugar'
                },
                {
                    amount: '1/2',
                    unit: 'cup',
                    ingredient: 'canola oil'
                },
                {
                    amount: '300',
                    unit: 'g',
                    ingredient: 'flour'
                },
                {
                    amount: '3',
                    unit: '',
                    ingredient: 'apples'
                },
            ]
        },
    ]
});