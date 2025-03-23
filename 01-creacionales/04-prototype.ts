/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

export class Document {
  public title: string;
  public author: string;
  private content: string;

  constructor(title: string, author: string, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Content: ${this.content}`);
  }

  clone(): Document {
    return new Document(this.title, this.author, this.content);
  }
}

function main() {
  const document = new Document("The Little Prince", "Antoine de Saint-Exupéry", "Little prince is a fictional character");
  console.log('<--------------- JK 04-prototype --------------->');
  console.log(document);
  document.displayInfo();

  const document2 = document.clone();
  document2.title = "The Little Prince 2";
  console.log(document2);
  document2.displayInfo();
}

main();

