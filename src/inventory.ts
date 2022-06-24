import { Product } from "./products";

export interface Item {
    product: Product;
    quantity: number;
};

const inventory: Item[] = [
    { product: {name: "motor", price: 10.00}, quantity: 10 },
    { product: {name: "sensor", price: 12.50}, quantity: 4 },
    { product: {name: "LED", price: 1.00}, quantity: 20 },
];

export function calcInventoryValue (array: Item[]): number {
    let itemTotal = 0;
    let inventoryTotal = 0;

    if (array !== []) {
        for (let item of array) {
            itemTotal = item.quantity * item.product.price;
            inventoryTotal += itemTotal;
        }
        return inventoryTotal;
    } else {
        return 0;
    }
};

const totalInv = calcInventoryValue(inventory);
console.log(totalInv);