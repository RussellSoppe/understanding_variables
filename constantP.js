let kInput = document.getElementById("kInput");
kInput.style.color = "red";
let xInput = document.getElementById("xInput");
xInput.style.color = "red";
let finalY = document.getElementById("finalY");
let finalK = document.getElementById("finalK");
let finalX = document.getElementById("finalX");


const setK = () =>{
	finalK.innerHTML = kInput.value;
	finalK.style.color = "red";
}

const setX = () =>{
	finalX.innerHTML = xInput.value;
	finalX.style.color = "red";
}

const calcY = () =>{
	let Y = kInput.value * xInput.value;
	finalY.innerHTML = Y;
	finalY.style.color = "red";
	console.log(Y);
}
