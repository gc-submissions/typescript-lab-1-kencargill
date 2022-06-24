export interface Mountain {
    name: string;
    height: number;
};

let mountains: Mountain[] = []

mountains.push({name: 'Kilimanjaro', height: 19341});
mountains.push({name: 'Everest', height: 29029});
mountains.push({name: 'Denali', height: 20310});

export function findNameOfTallestMountain (array: Mountain[]) {
    if ( array !== []) {
        let maximum = array[0].height;
        let heights: number[] = [];
        let tallestHeight: number; 

        for ( let element of array) {
            heights.push(element.height);
        }
            tallestHeight = Math.max(...heights)
        for (let element of array) {
            if (element.height === tallestHeight){
                return element.name;
            }
        }
    } else {
        return 'pls fill your array'
    }
};

const tallGuy = findNameOfTallestMountain(mountains);
console.log('the tall guy is ' + tallGuy);