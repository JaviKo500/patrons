import { COLORS } from '../helpers/colors.ts';
/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;
}

class ChickenBurger implements Hamburger {
  prepare(): void {
    console.log('<--------------- JK 02-factory-method --------------->');
    console.log('Preparing %ChickenBurger', COLORS.cyan);
  }
}

class BeefBurger implements Hamburger {
  prepare(): void {
    console.log('<--------------- JK 02-factory-method --------------->');
    console.log('Preparing %BeefBurger', COLORS.green);
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('<--------------- JK 02-factory-method --------------->');
    console.log('Preparing %BeanBurger', COLORS.yellow);
  }
}

abstract class Restaurant {
  protected abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ChickenBurger();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeefBurger();
  }
}

class BeanRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt('What kind of burger do you want(chicken/beef/bean)?');
  
  switch (burgerType) {
    case 'chicken':
      restaurant = new ChickenRestaurant();
      break;
    case 'beef':
      restaurant = new BeefRestaurant();
      break;
    case 'bean':
      restaurant = new BeanRestaurant();
      break;
    default:
     throw new Error("Invalid burger type");
     
  }

  restaurant.orderHamburger();
}

main();