var catalog = new Array();
var basket = new Array();

function addProductCatalog(id, name, description, sizes, price, available) {
    catalog.push({
        id:id,
        name:name,
        description:description,
        sizes:sizes,
        price:price,
        available:available,
    })
}

function addProductBasket(good, amount) {
    basket.push({
        good:good,
        amount:amount,
    })    
}

function delProductBasket(good) {
    i = basket.indexOf(good);
    if(i >= 0) {
        basket.splice(i,1);
    }    
}

function clearBasket() {
    basket = new Array();
}

function totalBasket() {
    var sum = 0;
    var count = 0;
    for (let i = 0; i < basket.length; i++) {
        count += basket[i].amount;
        sum += basket[i].amount * basket[i].good.price;
    }
    return {totalAmount:count, totalSumm:sum,}
}

addProductCatalog(1, 'Tomat', 'Tomat', new Array, 13, true)
addProductCatalog(2, 'Tomat1', 'Tomat1', new Array, 10, true)
addProductCatalog(3, 'Tomat2', 'Tomat2', new Array, 1, true)
addProductCatalog(4, 'Tomat3', 'Tomat3', new Array, 3, true)
addProductCatalog(5, 'Tomat4', 'Tomat4', new Array, 6, true)

addProductBasket(catalog[2], 2)
addProductBasket(catalog[4], 6)

console.log(catalog)
console.log(basket)

console.log(totalBasket())