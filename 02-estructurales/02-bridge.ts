/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
  use(): void;
}

class SwordAttack implements Ability {
  use() {
    console.log('Sword attack');
  }
}

class MagicSpell implements Ability {
  use() {
    console.log('Magic spell');
  }
}

class AxeAttack implements Ability {
  use() {
    console.log('Axe attack');
  }
}

class Fireball implements Ability {
  use() {
    console.log('Fireball');
  }
}

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  setAbility(ability: Ability) {
    this.ability = ability;
  }

  abstract performAbility(): void;
}

class Warrior extends Character {
  override performAbility(): void {
    console.log('<--------------- JK 02-bridge --------------->');
    console.log('Warrior performs ability');
    this.ability.use();
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log('<--------------- JK 02-bridge --------------->');
    console.log('Mage performs ability');
    this.ability.use();
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack());
  warrior.performAbility();

  warrior.setAbility(new AxeAttack());
  warrior.performAbility();

  const mage = new Mage(new MagicSpell());
  mage.performAbility();

  mage.setAbility(new Fireball());
  mage.performAbility();

}

main();