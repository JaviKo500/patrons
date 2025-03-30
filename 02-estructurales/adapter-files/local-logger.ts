import { COLORS } from '../../helpers/colors.ts';

export class LocalLogger {
  constructor(private file: string) {}
    
  writeLog( msg: string ) {
    console.log('<--------------- JK Local-logger --------------->');
    console.log(`[${this.file} log] ${msg}`);
  }
  writeError( msg: string ) {
    console.log('<--------------- JK Local-logger --------------->');
    console.log(`[${this.file} error] %c${msg}`, COLORS.red);
  }
  writeWarning( msg: string ) {
    console.log('<--------------- JK Local-logger --------------->');
    console.log(`[${this.file} warning] %c${msg}`, COLORS.yellow);
  }

}