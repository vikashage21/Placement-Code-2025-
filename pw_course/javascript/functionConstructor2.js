const Product = (name, price, rating)=>{
    this.name=name,
    this.price=price,
   this.rating=rating
}

const p = new Product('iphone earbuds','1000','4')

console.log(p)

// note ;- the theory of this keyword pointing to calling  context is not applicable with arrow function.