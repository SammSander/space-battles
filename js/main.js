
class Schwartznegger {
    constructor(name) {
        this.name = Schwartznegger;
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7
    }
  attack(alien) {
      let attackChance = Math.random();
      if(attackChance <= this.accuracy) {
          alien.hull -= this.firepower
        return `${this.name} struck the target!`;
       } else {
           return `${this.name} missed the target.`
       }
  }
};


class Alien {
    constructor (name, hull, firePower, accuracy){
        this.name = name;
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
    attack (shooter) {
        let attackChance = Math.random();
        if (attackChance= this.accuray) {
            shooter.hull -= this.firePower
            return `${this.name} has struck your ship!`;
        } else {
            return `${this.name} has missed your ship!`
        }
   }
};

let alienShips = ['ship1', 'ship2', 'ship3', 'ship4', 'ship5', 'ship6'];
let alienHullValues = [3, 4, 5, 6]; 
let alienFirePower = [2, 3, 4]; 
let alienAccuracy = [0.6, 0.7, 0.8]; 

let createAlienShips = () => {
    for (let i = 0; i < 6; i++) {
        let name = alienShips[Math.floor(Math.random() * 6)];;
        let hull = alienHullValues[Math.floor(Math.random() * 4)];
        let firepower = alienFirePower[Math.floor(Math.random() * 3)];
        let accuracy = alienAccuracy[Math.floor(Math.random() * 3)];
        return alienShips[i] = new Alien (name, hull, firepower, accuracy);
    }
}
   
//console.log(createAlienShips());









let shipsBattle = (ship1, ship2) => {
   
    let ships = [ship1, ship2];
    let attack = false;
    let attacking = 0;
    let beingAttacked = 1;
    let temp;
    console.log("%c Attack Begins =================", "font-size: 30px");
    while (ships[beingAttacked].hull > 0) {
     
      if (ships[beingAttacked].hull > 0) {
       
        console.log("\n");
        console.log(
          `%c ${ships[attacking].name} attacked ${ships[beingAttacked].name}`,
          "color: purple; border: 1px solid grey; font-size: 18px;"
        );
        
        attack = ships[attacking].attack();
        if (attack === true) {
          ships[beingAttacked].hull -= ships[attacking].firePower; 
          console.log(
            `%c Attack Successful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            "color: green; font-weight: bold; font-size: 16px;"
          );
        } else {
          console.log(
            `%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            "color: red; font-size: 16px;"
          );
        }
        
        if (ships[beingAttacked].hull <= 0) {
          console.log(
            `%c ${ships[beingAttacked].name} has been destroyed`,
            "color: red; border: 1px solid grey; font-size: 16px;"
          );
          if (ships[beingAttacked] === Schwartznegger) {
            
            alert("Game Over!!!");
          } else if (
            ships[beingAttacked].name === alienShips[alienShips.length - 1].name
          ) {
            alert(
              `%c ${ships[beingAttacked].name} destroyed!\nAlien fleet has been destroyed!\nyou have been victorious`,
              "color: green;"
            );
          } 
          else {
            game.userResponse = prompt(
              `${alienShips[game.targetShip].name} destroyed!!\n${
                Schwartznegger.name
              } Hull: ${
                Schwartznegger.hull
                Schwartznegger.hull
              }\nWould you like to ATTACK the next ship or RETREAT from battle?`,
              ""
            );
            game.targetShip += 1; 
            checkUserPrompt();
            return;
          }
        } else {
  
          temp = attacking;
          attacking = beingAttacked;
          beingAttacked = temp;
        }
      }
    }
  };
  
