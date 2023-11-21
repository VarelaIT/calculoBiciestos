import ReadLine from 'readline';

const readline = ReadLine.createInterface(process.stdin);
const WELCOME: string= `
    Este programa, al insertar un año, devuelve true si el año es biciesto o false si no lo es.
    Inserte 's' para salir.
`;
const DESCRIPTION: string = "Inserte un año, o 's' para salir."
let input: string= '';

function calculate(year: number): boolean {
    if( (year % 4 === 0) && (year % 100 !== 0) )
        return true;
    if( (year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0) )
        return true;
    
    return false;
}

console.log(WELCOME);

function programLoop(){
    console.log(DESCRIPTION);
    readline.question('', (answer: string)=>{
        let year: number = parseInt(answer);
        
        if(Number.isNaN(year) || year< 0 || year > 10000)
            process.exit();

        console.log(calculate(year), year);
        programLoop();
    });
}

programLoop();
