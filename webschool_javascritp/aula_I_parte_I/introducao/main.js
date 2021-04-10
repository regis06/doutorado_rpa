const num1 = parseInt( process.argv.slice( 2 ) );
const num2 = parseInt( process.argv.slice( 3 ) );

const f = ( x ) => x
const inverse = ( x ) => x * -1

const add = ( x ) => ( y ) => x + y
const subtract = ( x ) => ( y ) => add( inverse( x ) )( y )

const multiply = ( x ) => ( y ) => {

    let result = 0;

    const somaComX = add( x );
    const decrement1 = subtract( 1 );

    while( y > 0 ){
        result = somaComX( result )
        y = decrement1( y )
    }

    return result;
}

console.log("Soma é: ", ( add( num1 )( num2 ) ) );
console.log("Diferença é: ", ( subtract( num2 )( num1 ) ) );
console.log("Multiplicação de" + num1 + " X " + num2 + " = " + multiply(num1)(num2));