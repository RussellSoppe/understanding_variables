
//Calculate Area Variables
let Linput = document.getElementById("Linput");
Linput.style.color = "red";
let Winput = document.getElementById("Winput");
Winput.style.color = "red";
let finalArea = document.getElementById("finalArea");
finalArea.style.color = "red";

let LCheck = true;
let WCheck = true;

//Calculate User Expression Variables
let var1 = document.querySelector("#variable1");
let var1value = document.getElementById("V1input");
let var2 = document.querySelector("#variable2");
let var2value = document.getElementById("V2input");
let operation = document.getElementById("operation1");
let displayvar1 = document.getElementById("var1display");
let displayvar2 = document.getElementById("var2display");
let displayoperation1 = document.getElementById("operationdisplay1");
let displayoperation2 = document.getElementById("operationdisplay2");
let displayvar1value = document.getElementById("var1displayvalue");
let displayvar2value = document.getElementById("var2displayvalue");
let finalvarsolution = document.getElementById("finalvarsolution");
//let displayoperation = document.getElementById("operationdisplay2");


//Making an Expression with Variables Event Listeners
var1.addEventListener("change", (event) => {
	displayvar1.innerHTML = event.target.value;
}); 

operation.addEventListener("change", (event) => {
	displayoperation1.innerHTML = event.target.value;
	displayoperation2.innerHTML = event.target.value;
}); 

var2.addEventListener("change", (event) => {
	displayvar2.innerHTML = event.target.value;
}); 

var1value.addEventListener("change", (event)=>{
	displayvar1value.innerHTML = event.target.value;
})

var2value.addEventListener("change", (event)=>{
	displayvar2value.innerHTML = event.target.value;
})

const calcArea = () =>{

	let length = Linput.value;
	let width = Winput.value;

	for (let i = 0; i <= Linput.value.length - 1; i++){
		
		if(Linput.value[i] == "/"){

			LCheck = true;

			let position = i;
			console.log("position: ", position);

			//create a numerical value from first set using position as break point
			let value1 = "0";
			for(let k = 0; k < position; k++){
				value1 = value1 + Linput.value[k].toString();
			}

			let value2 = "0"
			for(let k = position + 1; k <= Linput.value.length -1; k++){
				value2 = value2 + Linput.value[k].toString();
			}

			length = Number(value1) / Number(value2);

		}
		
	}

	for (let i = 0; i <= width.length - 1; i++){
		
		if(width[i] == "/"){

			WCheck = true;

			let position = i;
			console.log("position: ", position);

			//create a numerical value from first set using position as break point
			let value1 = "0";
			for(let k = 0; k < position; k++){
				value1 = value1 + width[k].toString();
			}

			let value2 = "0"
			
			for(let k = position + 1; k <= width.length -1; k++){
				value2 = value2 + width[k].toString();
			}

			width = Number(value1) / Number(value2);
			
		}
		
	}


	let area = length * width;
	finalArea.innerHTML = area;

}

const calcVar = ()=>{
	
	let finalvalue = 0;

	switch(operation.value){
		case "/":
		finalvalue = Number(var1value.value)/Number(var2value.value);
		console.log("/", var1value.value, var2value.value);
		break;
		case "*":
		finalvalue = Number(var1value.value)*Number(var2value.value);
		console.log("*", var1value.value, var2value.value);
		break;
		case "-":
		finalvalue = Number(var1value.value) - Number(var2value.value);
		console.log("-", var1value.value, var2value.value);
		break;
		case "+":
		finalvalue = Number(var1value.value) + Number(var2value.value);
		console.log("+", var1value.value, var2value.value);
		break;
		default:
		console.log("Switch Failed");
		break;

	}

	finalvarsolution.innerHTML = finalvalue;
}

