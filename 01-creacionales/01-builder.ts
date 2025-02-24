import { COLORS } from '../helpers/colors.ts';
/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = 'cpu - not defined';
  public ram: string = 'ram - not defined';
  public storage: string = 'storage - not defined';
  public gpu?: string;

  displayConfiguration = () => {
    console.log('<--------------- JK 01-builder --------------->');
    console.log(`
      CPU: ${this.cpu}
      RAM: ${this.ram}
      Storage: ${this.storage}
      GPU: ${this.gpu ?? 'not defined'}`
    );
  }
}


class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
  .setCpu('inter core 2 dual')
  .setRam('8 GB')
  .setStorage('256 GB')
  .build();

  console.log('<--------------- JK 01-builder --------------->');
  console.log('Basic Computer:', COLORS.blue);
  console.log(basicComputer);

  const gamerComputer = new ComputerBuilder()
  .setCpu('Intel Core i7-10870H')
  .setRam('32 GB')
  .setStorage('2 TB M.2')
  .setGpu('Nvidia GeForce GTX 4090')
  .build();

  console.log('<--------------- JK 01-builder --------------->');
  console.log('Gamer Computer:', COLORS.blue);
  console.log(gamerComputer);
}

main();