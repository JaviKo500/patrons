import { COLORS } from '../helpers/colors.ts';
/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  pour(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing Chicken Hamburger", COLORS.yellow);
  }
}
class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparing Beef Hamburger", COLORS.yellow);
  }
}

class Water implements Drink {
  pour(): void {
    console.log("Pouring Water", COLORS.blue);
  }
}
class Beer implements Drink {
  pour(): void {
    console.log("Pouring Beer", COLORS.blue);
  }
}

interface Restaurant {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}


export class FastFoodRestaurant implements Restaurant {

  constructor() {
     
  }
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
  createDrink(): Drink {
    return new Beer();
  }
}

export class RestaurantFactory implements Restaurant {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
  createDrink(): Drink {
    return new Water();
  }
}

function main( factory: RestaurantFactory ) {
  const hamburger = factory.createHamburger();
  const drink = factory.createDrink();
  hamburger.prepare();
  drink.pour();
}
console.log('<--------------- JK 03-abstract-factory --------------->');
console.log('create a FastFoodRestaurant');
main(
  new FastFoodRestaurant()
);