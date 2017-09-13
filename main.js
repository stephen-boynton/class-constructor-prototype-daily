//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog(name, color, fed) {
	this.name = name;
	this.color = color || "brown";
	this.hungry = fed || false;
	this.status = "normal";
}

// Instances of Dog
// Needed: sadie, moonshine, atticus

const sadie = new Dog("sadie", "black");
const moonshine = new Dog("moonshine", "brown", true);
const atticus = new Dog("atticus");

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(name, cool) {
	this.name = name;
	this.cool = cool;
}

Human.prototype.pet = function(dog) {
	dog.status = "happy";
};

Human.prototype.feed = function(dog) {
	dog.hungry = false;
};

// Instances of Human
// Needed: mason, julia

const mason = new Human("mason", false);
const julia = new Human("julie", true);
