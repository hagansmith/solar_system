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