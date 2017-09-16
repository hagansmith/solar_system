"use strict";

const PlanetsGenerator = require('./planets');


function outputTo(domElement) {
  let key = Object.keys(domElement);
	let value = Object.values(domElement);
	let string = `<div class="planet col-md-4 text-center panel panel-default" id="${value["0"]}"><h2>${value["0"]}</h2>`;
  string += `<ul class="list-unstyled">`;
    for (var i = 0; i < key.length; i++){
			let newString = "";
			newString +=	 `<li>${key[i]}: ${value[i]}</li>`;
			string += newString;
		}
  string += `</ul>`;
  string += `</div>`;
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
