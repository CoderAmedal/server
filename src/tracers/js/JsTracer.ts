import { DockerTracer } from 'tracers/DockerTracer';

export class JsTracer extends DockerTracer {
  constructor() {
    super('js');
  }
}
