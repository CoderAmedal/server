import { LambdaTracer } from 'tracers/LambdaTracer';

export class JavaTracer extends LambdaTracer {
  constructor() {
    super('java');
  }

  protected preprocess(code: string) {
    // Make `Tracer.delay()` record the line number of its caller, so the web app can
    // highlight the currently executing line. The editor is 0-based.
    return code.split('\n')
      .map((line, i) => line.replace(/(\.\s*delay\s*)\(\s*\)/g, `$1(${i})`))
      .join('\n');
  }
}
