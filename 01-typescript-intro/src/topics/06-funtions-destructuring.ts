export interface Product {
    desc: string;
    price: number;
}

// const phone: Product = {
//     desc: "Nokia A1",
//     price: 150.0
// }

// const tablet: Product = {
//     desc: "iPad Air",
//     price: 250.0
// }

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalculationOptions): [number,number] {
    let total = 0;
    const { products,tax } = options

    products.forEach(({ price }) => {
        total += price;
    });

    return [total, total * tax];
}

// const shoppingCart = [phone, tablet];
// const tax = 0.15

// const [total, taxes] = taxCalculation({
//     products: shoppingCart,
//     tax: tax
// });


// console.log(total);
// console.log(taxes);

// export {  };