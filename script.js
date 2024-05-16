let categories = [
    { categoryId: 1, categoryName: "Fruits" },
    { categoryId: 2, categoryName: "Beverages" }
];

let inventory = [
    { productId: 1, productName: "Apple", category: 1, price: 0.99, stock: 150 },
    { productId: 2, productName: "Orange Juice", category: 2, price: 3.49, stock: 40 }
];


//2. Adding a Product//
const add = (product) => {
    !product.productId || !product.productName || !product.category || product.price == null || product.stock == null
    ? console.log("Error")  
    : inventory.some( x => x.productId === product.productId)
    ? console.log('error the product ID should be unique')
    : inventory.push(product);
} ;

add({ productId: 3, productName: "grape", category: 1, price: 100, stock: 1 });
console.log(inventory)
    
//3. Finding a Product//
const finding = (productId) => {
    // let filter = inventory.filter(item => item.productId === productId)
    // return filter.length > 0 ? filter: 'error';

    let find = inventory.find( item => item.productId === productId)
    return find? find : 'Error not found';
};

//4. Updating Stock//
const update = (productId, newStock) => {
    let data = finding(productId);
    data.stock = newStock
    return data.stock > 0 ? data : 'Error'; 
    
};

console.log(update(1,5));


//5. Deleting Product//
const remove = (productId) => {
    let copy = inventory.slice()
    let data = finding(productId);
    let index = inventory.indexOf(data);
    if (data === 'Error not found') { 
        return 'Error not found';
    } 
    inventory.splice(index,1);
    return copy.length === inventory.length + 1 
    ? 'successful deleted'
    : 'error';
     
};
console.log(remove(1));