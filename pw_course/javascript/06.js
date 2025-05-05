// creating javascript object

let obj ={
    id:458,
    name:"vikash"
}

console.log(obj);

// creating object by new object

let newObj = new Object;

newObj.id=456878;
newObj.name="vikas";

console.log(newObj)

// creating a object by function constructor

function person(id , name , salary){

    this.id = id;
    this.name=name;
    this.salary = salary

}

let p1 = new person(456 , "vikash" , 45678);

console.log(p1)



// fetching the data form object

console.log(p1.id)


// assign new data

p1.company="google";


console.log(p1)

// deletion of data in object

delete p1["company"]

console.log(p1)
