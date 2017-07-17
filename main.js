//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, status, hungry) {
  'use strict';
   this.name = name;
   this.color = color;
   this.status = status;
   this.hungry = hungry;
}

let sadie = new Dog("Sadie", "black", "normal", false)
let moonshine = new Dog("Moonshine", "black", "normal", true)
let atticus = new Dog("Atticus")



// Instances of Dog
// Needed: sadie, moonshine, atticus
// function Dog(color){
//   this.status = "normal"
//   this.color = color
// }
//
// let sadie = new Dog()
// let moonshine = new Dog()
// let atticus = new Dog()
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  'use strict'
  // this.name = name;
  this.cool = cool;
  this.pet = function(dog){
    dog.status = "happy"
  };
  this.owner = function(dog){
    sadie.owner = "mason"
  }
  this.feed = function(dog){
    moonshine.hungry = false;
  }

}
let mason = new Human(false);
let julia = new Human(true)

// Instances of Human
// Needed: mason, julia
// function Human(){
//   this.pet = function (dog) {
//     return dog.status = 'happy'
//   }
// }
// let mason = new Human()
// let julia = new Human()
