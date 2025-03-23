/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */


class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unsavedChanges: boolean;

  constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unsavedChanges = unsavedChanges;
  }

  displayState() {
    console.log('<--------------- JK 05-inmutabilidad --------------->');
    console.log('Content:', this.content);
    console.log('Cursor Position:', this.cursorPosition);
    console.log('Unsaved Changes:', this.unsavedChanges, '\n');
  }

  copyWith({
    content,
    cursorPosition,
    unsavedChanges,
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsavedChanges ?? this.unsavedChanges,
    );
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  private currentIndex: number;

  saveState(state: CodeEditorState) {
    if (this.currentIndex === this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }
    this.history.push(state);
    this.currentIndex = this.history.length - 1;
  }

  redo(): CodeEditorState | null {
    if ( this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }

  undo(): CodeEditorState | null {
    if ( !this.history.length ) return null;
    this.currentIndex--;
    return this.history[this.currentIndex];
  }
}

function main() {
  const history = new CodeEditorHistory();
  let editorState = new CodeEditorState('console.log("Hello, world!");', 2, false);
  history.saveState(editorState);
  
  editorState.displayState();
  
  editorState = editorState.copyWith({ content: 'console.log("Hello, world!"); \n console.log("Hello, world!");', cursorPosition: 3, unsavedChanges: true });
  history.saveState(editorState);

  editorState.displayState();

  editorState = editorState.copyWith({ cursorPosition: 5 });
  history.saveState(editorState);

  editorState.displayState();

  console.log('<--------------- JK 05-inmutabilidad --------------->');
  console.log('Undo:');

  editorState = history.undo()!;
  editorState.displayState();

  console.log('<--------------- JK 05-inmutabilidad --------------->');
  console.log('Redo:');

  editorState = history.redo()!;
  editorState.displayState();
}

main();