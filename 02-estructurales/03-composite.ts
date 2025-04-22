/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
  showDetails( indent?: string ): void;
}

class Files implements FileSystemComponent {
  private name: string;

  constructor( name: string ) {
    this.name = name;
  }

  showDetails(indent?: string): void {
    console.log(`${indent}- File: ${this.name}`);
  }
}

class Folder implements FileSystemComponent {
  private name: string;
  private contents: FileSystemComponent[] = [];
  constructor( name: string ) {
    this.name = name;
  }

  add( component: FileSystemComponent ): void {
    this.contents.push( component );
  }
  showDetails(indent: string = ''): void {
    console.log(`${indent}+ Folder: ${this.name}`);
    this.contents.forEach( content => content.showDetails( `${indent}  ` ) );
  }
}

function main() {
  const file1 = new Files( 'file1.txt' );
  const file2 = new Files( 'file2.txt' );
  const file3 = new Files( 'file3.txt' );
  const file4 = new Files( 'file4.txt' );

  const folder = new Folder( 'Documents 1' );
  
  folder.add( file1 );
  folder.add( file2 );
  const folder2 = new Folder( 'Documents 2' );
  
  folder2.add( file3 );

  const folder3 = new Folder( 'Documents 3' );
  folder3.add( file4 );
  
  folder2.add( folder3 ); 
  const rootFolder = new Folder( 'Documents' );
  rootFolder.add( folder );
  rootFolder.add( folder2 );

  rootFolder.showDetails();
}

main();