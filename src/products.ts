export interface Product {
    name: string;
    price: number;
};

const products: Product[] = [
    {name: "shampoo", price: 5.5 },
    {name: "loofah", price: 2.99 },
    {name: "clippers", price: 4.0 },
];

export function calcAverageProductPrice (array: Product[]): number {
    if (array !== [] && array.length > 0) {
        console.log(array)
        const average = array.reduce((a, b) => a + b.price, 0) / array.length;
        return average;
    } else {
        return 0;
    }
}

const avPrice = calcAverageProductPrice(products);
console.log(avPrice);