// function Product (n,p,r){
//     this.Name=n,
//     this.price=p,
//     this.rating=r
// }

// const p = new Product('MacBook',150000,5)
// console.log('this is function constructor' ,p)

// this keyword in js is diff than other languages
// this keyword refers to the context from where we called
// in the function constructor also
//if you return primitive it is ignored and we return the object referred by this
/**
 * if you return a custom obj , then the custom obj is returned
 * if you dent return anything, then object referred by this is returned
 * 
 * 
*/


// function expression

const Product = function (n ,p , r){
    this.Name=n,
    this.price=p,
     this.rating=r
    
}

const p = new Product('MacBook',150000,5)

console.log('in function expression constructor' , p)
