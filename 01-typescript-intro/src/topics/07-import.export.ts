import { Product, taxCalculation } from './06-funtions-destructuring'

const shoppingCart: Product[] = [
    {
        desc: 'Nokia',
        price: 100
    },
    {
        desc: 'iPad',
        price: 150
    }
];

const [total, tax] = taxCalculation({
    products: shoppingCart,
    tax:0.15
});

console.log(total);
console.log(tax);