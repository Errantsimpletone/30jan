let greetings = 'hello!';
alert(greetings);

// string
// Data Types:
// boolean - true, false
// number
// null

// undefined
// Object



// Symbol
const name = prompt( 'Enter your name');
const msg = 'Hello,' + name;
alert(msg);

const age = parseInt (prompt( 'Enter your age'));
const newAge = age + 1;
alert(('U r... ') + checkAge(age));

function add(a, b, c) {
    const res = a + b + c;
    return res;
}

const total = add(2, 2, 3);

function checkAge(age) {
    if ( age <=18) {
        return 'child';
    } else {
        return 'adult';
    }
}

