interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {name: "Kilimanjaro", 
    height: 19341}, 
    {name:"Everest", 
    height:29029}, 
    {name:"Denali", 
    height:20310}];

function findNameOfTallestMountain(mountains: Mountain[]) {
    let tallestMountain= mountains[0]; //because youre declaring this to a type of "Product" youll get a type error,
    //you can avoid this by assiging tallestMountain to just element and then returing tallestMountain.name
    if (mountains.length <=0) {
        return "";
    }else{
       mountains.forEach(element =>{
        if(element.height > tallestMountain.height) {
            tallestMountain=element;
        }
       });
       return tallestMountain.name;
    } 
  }

let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);

interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {name: "Aquafina",
    price: 1.49,},
    {name: "Purelife",
    price: 2.49},
    {name: "SmartWater",
    price: 2.99},
    {name: "Fiji",
    price: 3.49},
    {name: "Evian",
    price: 3.99}];

function calcAverageProductPrice(products: Product[]) {
    let averagePrice; //so with this type error here you can just declare it and not initialize it to avoid the type error
       if (products.length <=0) {
        return 0;
    }else{let sum =0;{
        for (let i =0; i < products.length; i++) {
            sum += products[i].price;
            }
            averagePrice = sum / products.length;
            return averagePrice;
            }
        }}
    let AverageWaterPrice =calcAverageProductPrice(products);
    console.log(AverageWaterPrice);
        
interface InventoryItem {
    product: {
        name: string;
        price: number;
    };
    quantity: number;
}

const inventory: InventoryItem[] =[
    {product: {name:"motor", price:10.00}, quantity: 10},
    {product: {name:"sensor", price:12.50}, quantity: 4},
    {product: {name:"LED", price:1.00}, quantity: 20},
];

function calcInventoryValue(inventory: InventoryItem[]){
    let totalValue; //same thing, no need to intitalize
        if (inventory.length <=0) {
            return 0;
        }else{let sum =0;{
            for(let i=0; i <inventory.length; i++){
                sum +=(inventory[i].product.price * inventory[i].quantity);
            }
            
        totalValue= sum;
        return totalValue;
        }   
    }}
let totalValue =calcInventoryValue(inventory);
console.log(totalValue);
//param is a variable, can call it anything you want to
