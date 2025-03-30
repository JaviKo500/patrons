import { Logger } from 'jsr:@deno-library/logger';
import { COLORS } from '../../helpers/colors.ts';

interface ILoggerAdapter {
  file: string;
  writeLog( msg: string ): void;
  writeError( msg: string ): void;
  writeWarning( msg: string ): void;
}


export class LoggerAdapter implements ILoggerAdapter {
  public file: string;
  private logger: Logger = new Logger();

  constructor( file: string ) {
    this.file = file;
  }
  writeLog( msg: string ) {
    this.logger.info(`[${this.file} log] ${msg}`);
  }
  writeError( msg: string ) {
    this.logger.error(`[${this.file} error] %c${msg}`);
  }
  writeWarning( msg: string ) {
    console.log('<--------------- JK Local-logger --------------->');
    console.log(`[${this.file} warning] %c${msg}`, COLORS.yellow);
    this.logger.warn(`[${this.file} warning] %c${msg}`);
  }
}
