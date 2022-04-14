//********************************
//********** initialise **********
//********************************

//declare global variable
declare var strGlobalMainTemp: string;

//on document load
document.addEventListener("DOMContentLoaded", () => {
    //set decimal place upon window load
    (<HTMLSelectElement>document.getElementById('select-decimal-place')).value = '3';
    //put focus on main input area
    document.getElementById('srf-input-main').focus();
});

//*******************************
//*********** classes ***********
//*******************************
class Calculate {
    //add
    addNumber(firstNumber: number, secondNumber: number) {
        console.log('add calculated');
        return firstNumber + secondNumber;
    }
    //divide
    divideNumber(firstNumber: number, secondNumber: number) {
        console.log('divide calculated');
        return firstNumber / secondNumber;
    }
    //multiple
    multiplyNumber(firstNumber: number, secondNumber: number) {
        console.log('mutiple calculated');
        return firstNumber * secondNumber;
    }
    //subtract
    subtractNumber(firstNumber: number, secondNumber: number) {
        console.log('subtract calculated');
        return firstNumber - secondNumber;
    }
}

//*******************************
//********** functions **********
//*******************************
//main input area keypress
/**
 *  
 * @param event keypress
 */
function keypressHandler(event: KeyboardEvent) {
    const key: any = event.key;
    console.log("key= " + key);

    //input numbers
    switch (key !== null) {
        //decimal point
        case (key === "."):
            console.log("Decimal= " + key)
            break;
        //plus key
        case (key === "+"):
            console.log("Add= " + key)
            break;
        //minus key
        case (key === "-"):
            console.log("Subtract= " + key)
            break;
        //multiplication key
        case (key === "*"):
            console.log("Multiply= " + key)
            break;
        //division key
        case (key === "/"):
            console.log("Divide= " + key)
            break;
        //number keys
        case (key === "0"):
            console.log("number= " + key)
            break;
        case (key === "1"):
            console.log("number= " + key)
            break;
        case (key === "2"):
            console.log("number= " + key)
            break;
        case (key === "3"):
            console.log("number= " + key)
            break;
        case (key === "4"):
            console.log("number= " + key)
            break;
        case (key === "5"):
            console.log("number= " + key)
            break;
        case (key === "6"):
            console.log("number= " + key)
            break;
        case (key === "7"):
            console.log("number= " + key)
            break;
        case (key === "8"):
            console.log("number= " + key)
            break;
        case (key === "9"):
            console.log("number= " + key)
            break;
        case (key === "="):
            console.log("equal= " + key)
            break;
        case (key === "Enter"):
            console.log("enter= " + key)
            break;
        default:
            console.log("not valid")
            return;
    }
}

//*******************************
//********** listeners **********
//*******************************
//add listener to main text input area
(<HTMLSelectElement>document.getElementById("srf-input-main")).addEventListener("keypress", keypressHandler
);