(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const outputEarth = () => {
	let info = {
	"Name": "Earth",
    "Year Discovered": 1862,
    "Mass": "3.285 × 10^23 kg",
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Carbon Emmissions",
    "Satellites": "A whole bunch and some space junk",
    "Visitors": "Millions"
	};
    return info;
};

module.exports = outputEarth;
},{}],2:[function(require,module,exports){
"use strict";

const outputJupiter = () => {
	let info = {
	"Name": "Jupiter",
    "Year Discovered": 20,
    "Mass": "3.285 × 10^23 kg",
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Beans",
    "Satellites": "ummmm",
    "Visitors": "None"
	};
	
	return info;
};

module.exports = outputJupiter;
},{}],3:[function(require,module,exports){
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
},{"./planets":7}],4:[function(require,module,exports){
"use strict";

const outputMars = () => {
	let info = {
	"Name": "Mars",
    "Year Discovered": 1990,
    "Mass": "3.285 × 10^23 kg",
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Rock candy",
    "Satellites": "Sure",
    "Visitors": "A couple rovers or something and Hauser"
	};
	
	return info;
};

module.exports = outputMars;
},{}],5:[function(require,module,exports){
"use strict";

const outputMercury = () => {
	let info = {
    "Name": "Mercury",
    "Year Discovered": 1992,
    "Mass": "3.285 × 10^23 kg",
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Rocks",
    "Satellites": "None",
    "Visitors": "None",
	};
	
  return info;
 };

module.exports = outputMercury;
},{}],6:[function(require,module,exports){
"use strict";

const outputNeptune = () => {
	let info = {
	"Name": "Neptune",
    "Year Discovered": 2022,
    "Mass": "3.285 × 10^23 kg", 
    "Size": "1,516 mi",
    "Distance from the Sun": "Too far to count",
    "Atmosphere Composition": "Rocks",
    "Satellites": "None",
    "Visitors": "None"
	};
	
	return info;
};

module.exports = outputNeptune;
},{}],7:[function(require,module,exports){
"use strict";

const mercury = require('./mercury');
const venus = require('./venus');
const earth = require('./earth');
const mars = require('./mars');
const jupiter = require('./jupiter');
const saturn = require('./saturn');
const uranus = require('./uranus');
const neptune = require('./neptune');

const planetsGenerator = {
	mercury, venus, earth, mars, jupiter, saturn, uranus, neptune
};

module.exports = planetsGenerator;
},{"./earth":1,"./jupiter":2,"./mars":4,"./mercury":5,"./neptune":6,"./saturn":8,"./uranus":9,"./venus":10}],8:[function(require,module,exports){
"use strict";

const outputSaturn = () => {
	let info = {
	"Name": "Saturn",
    "Year Discovered": 1882,
    "Mass": "3.285 × 10^23 kg", 
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Salty ice",
    "Satellites": "I think theres one crashing into the atmosphere any day now",
    "Visitors": "None"
	};
	
	return info;
};

module.exports = outputSaturn;
},{}],9:[function(require,module,exports){
"use strict";

const outputUranus = () => {
	let info = {
	"Name": "Uranus",
    "Year Discovered": 1222,
    "Mass": "3.285 × 10^23 kg", 
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Rocks",
    "Satellites": "None",
    "Visitors": "None"
	};
	
	return info;
};

module.exports = outputUranus;
},{}],10:[function(require,module,exports){
"use strict";

const outputVenus = () => {
	let info = {
	"Name": "Venus",
    "Year Discovered": 1992,
    "Mass": "3.285 × 10^23 kg", 
    "Size": "1,516 mi",
    "Distance from the Sun": "35.98 million mi",
    "Atmosphere Composition": "Rocks",
    "Satellites": "None",
    "Visitors": "None"
	};
	
	return info;
};

module.exports = outputVenus;
},{}]},{},[3]);
