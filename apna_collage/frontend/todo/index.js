// creating a todo app using js
let array = [];
let req = prompt('enter your request ');

// adding a while loop to keep the app running until user wants to quit
while (true) {
    if (req === 'quit') {
        console.log('quitting the app');
        break;
    }
    else if (req === 'list') {
        console.log('your todo list is :');
        for (const items of array) {
            for (let i = 0; i < array.length; i++) {
                console.log(`${i} : ${items}`);
            }

        }
    }
    else if (req === 'add') {
        req = prompt('enter your new todo item');
        array.push(req);
        console.log(`${req} added to the list`);
    }
    else if (req === 'delete') {
        let index = parseInt(prompt('enter the index of the item to be deleted'));
        array.splice(index, 1)
        console
    } else {
        console.log('invalid request');
    }
    req = prompt('enter your request ');
}
