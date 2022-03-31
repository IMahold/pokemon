class Pokemon {
  constructor(name, health, magic, skills) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(...skill) {
    this.skills.push(...skill);
  }

  attackEnemy(power, enemy) {
    const attackFeature = this.skills.filter((item) => item.attack === power);
    if (this.magic < attackFeature[0].requiredMagic)
      console.log(`${this.name} doesn't have enough power to use it !!!`);
    else {
      console.log("Attack feature ", attackFeature[0].requiredMagic);
      this.magic = this.magic - attackFeature[0].requiredMagic;
      console.log("this magic !!!!!!", this.magic);
      enemy.health = enemy.health - attackFeature[0].damage;
      console.log("enemy health !!!!!", enemy.health);

      console.log(
        `${this.name} launched skill ${power} successfully, on ${enemy.name} !!!. ${this.name}'s magic was reduced to ${this.magic}, ${enemy.name}'s health was reduce to ${enemy.health}`
      );
    }

    // console.log(`${attack [0]}, ${this.name}`);
  }

  showStatus() {
    console.log(`${this.name}: \n Status of health:  ${this.health},\n ${this.magic} magic left`);
  }

  getMagic(number) {
     this.magic  = this.magic + number
    console.log(`${this.name} has got so much magic ${this.magic}`);

  }
}

const pikachu = new Pokemon("Pikachu", 200, 100);
const charizard = new Pokemon("Charizard", 150, 175);
const volcarona = new Pokemon("Volcarona", 150, 175);

class AttackSkill {
  constructor(attack, damage, requiredMagic) {
    this.attack = attack;
    this.damage = damage;
    this.requiredMagic = requiredMagic;
  }
}

let lightning = new AttackSkill("lightning", 40, 30);
let blaze = new AttackSkill("blaze", 45, 40);
let overheat = new AttackSkill("overheat", 60, 20);
let thunder = new AttackSkill("thunder", 50, 35);
let solarPower = new AttackSkill("solar power", 50, 45);
let flight = new AttackSkill("flight", 35, 20);
let skullBash = new AttackSkill("skull bash", 50, 60);

pikachu.learnAttackSkill(lightning, thunder);
volcarona.learnAttackSkill(skullBash, solarPower);
charizard.learnAttackSkill(flight, blaze);



pikachu.attackEnemy("lightning", volcarona);
pikachu.showStatus();
pikachu.getMagic(500)
pikachu.showStatus();
// charizard.attackEnemy()
// volcarona.attackEnemy()

// console.log(pikachu.skills);

console.log(pikachu.skills);
