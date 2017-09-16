"use strict";

const PlanetsGenerator = require('./planets');


function outputTo(domElement) {
  let key = Object.keys(domElement);
	let value = Object.values(domElement);
	let string = `<div class="planet" id="${value["0"]}"><h2>${value["0"]}</h2></div>`;
		for (var i = 0; i < key.length; i++){
			let newString = "";
			newString +=	 `<li>${key[i]}: ${value[i]}</li>`;	
			string += newString;
		}	
		document.getElementById("planets").innerHTML += string;
}

outputTo(PlanetsGenerator.mercury());
outputTo(PlanetsGenerator.venus());
outputTo(PlanetsGenerator.earth());
outputTo(PlanetsGenerator.mars());
outputTo(PlanetsGenerator.jupiter());
outputTo(PlanetsGenerator.saturn());
outputTo(PlanetsGenerator.uranus());
outputTo(PlanetsGenerator.neptune());