var products = [ { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
                 { name: "Orange", calories: 160, color: "orange", sold: 12101 },
                 { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
                 { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
                 { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
                 { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
                 { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
                 { name: "Water", calories: 0, color: "clear", sold: 62123 }];
//  products.sort(compareCalories);
//  printCalories(products);
 products.sort(compareName);
 printName(products);
//  let numbers1 = [5, 6, 3, 4, 9, 1, 0, 6];
//  numbers1.sort(compareNumbersDesc);
//  console.log(numbers1);
//  function compareNumbersDesc(a, b){
//     if(b>a){
//         return 1;
//     }
//     else if(b == a){
//         return 0;
//     }
//     else{
//         return -1;
//     }
//  }
function compareSold(colaA, colaB){
   return colaA.sold - colaB.sold;
}

function compareCalories(colaA, colaB){
        return colaB.calories - colaA.calories;
}

function compareName(colaA, colaB){
    if(colaA.name > colaB.name){
        return 1;
    }
    else if(colaA.name == colaB.name){
        return 0;
    }
    else{
        return -1;
    }
}

function printSold(products){
    for(let i = 0; i<products.length; i++){
        console.log(`Название - "${products[i].name}", продано - ${products[i].sold} бутылок`);
    }
}
function printName(products){
    for(let i = 0; i<products.length; i++){
        console.log(`Название - "${products[i].name}"`);
    }
}
function printCalories(products){
    for(let i = 0; i<products.length; i++){
        console.log(`Название - "${products[i].name}", калорийность - ${products[i].calories} Ккалорий`);
    }
}
                 