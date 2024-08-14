const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"]
    }
  },
  roll(mod = 0) {n
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
};

// Loop to log each item in Robin's inventory
for (let item of adventurer.inventory) {
  console.log(item);
}

// Test roll method
adventurer.roll();

// Part 2: Class Fantasy
class Character {
  constructor(name) {
    this.name = name;
    this.health = Character.MAX_HEALTH;
    this.inventory = [];
  }

  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }

  static MAX_HEALTH = 100;
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

// Test roll method for Robin and companions
robin.roll();
robin.companion.roll();
robin.companion.companion.roll();

// Part 3: Class Features
class Adventurer extends Character {
  constructor(name, role) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
  }

  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }

  static ROLES = ["Fighter", "Healer", "Wizard"];

  static isValidRole(role) {
    return Adventurer.ROLES.includes(role);
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  // Example of a method specific to Companion
  play() {
    console.log(`${this.name} is playing!`);
  }
}

const robinAdventurer = new Adventurer("Robin", "Fighter");
const leoCompanion = new Companion("Leo", "Cat");
const frankCompanion = new Companion("Frank", "Flea");
frankCompanion.inventory = ["small hat", "sunglasses"];
leoCompanion.companion = frankCompanion;
robinAdventurer.companion = leoCompanion;

// Test methods
robinAdventurer.scout();
leoCompanion.play();
frankCompanion.play();