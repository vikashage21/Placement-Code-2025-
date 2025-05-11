class Product {
    // properties  behaviors 

    // Name;
    // price;
    // rating;
    constructor(name, price, rating) {
        console.log('calling the constructor')
        // data member
        this.Name = name;
        this.price = price;
        this.rating = rating;

        // default object return 

        // this is refer to empty object = object.price 

        // return 10;  if you are returning primitive then it will be avoided in constructor 
        // return {
        //     x: 0, y: 20
        // }

        // custom object return  :- if you return non primitive then it will be returned
    }

    // behaviors - function member .

    display() {
        console.log(this)

        // refer to the product object

        console.log('displaying the current product', this.Name, this.price, this.rating)
    }
}


const p = new Product("iphone", 10000, 4);
console.log(p)
p.display()


