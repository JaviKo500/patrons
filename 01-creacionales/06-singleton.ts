/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls;
  private ballsCollected: number;

  private constructor() {
    this.ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls();
      console.log('<--------------- JK 06-singleton --------------->');
      console.log('Instance created:', DragonBalls.instance);
    }
    return DragonBalls.instance;
  }

  collectedBalls() {
    if ( this.ballsCollected < 10) {
      this.ballsCollected++;
      console.log('<--------------- JK 06-singleton --------------->');
      console.log('Balls collected:', this.ballsCollected);
      return;
    }
    console.log('<--------------- JK 06-singleton --------------->');
    console.log('No more balls to collect!');
  }

  summonShenLong() {
    if ( this.ballsCollected === 7 ) {
      console.log('<--------------- JK 06-singleton --------------->');
      console.log('Shen Long summoned!');
      this.ballsCollected = 0;
      return;
    }
    console.log('<--------------- JK 06-singleton --------------->');
    console.log('Shen Long not summoned!');
  }
}

function main() {
  const dragonBalls = DragonBalls.getInstance();
  dragonBalls.collectedBalls();
  dragonBalls.collectedBalls();
  dragonBalls.collectedBalls();

  dragonBalls.summonShenLong();

  const vegetaBalls = DragonBalls.getInstance();
  vegetaBalls.collectedBalls();
  vegetaBalls.collectedBalls();
  vegetaBalls.collectedBalls();
  vegetaBalls.collectedBalls();
  
  dragonBalls.summonShenLong();

  vegetaBalls.summonShenLong();
}

main();