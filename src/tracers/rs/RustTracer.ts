import { DockerTracer } from 'tracers/DockerTracer';
import { Release } from 'tracers/Tracer';

export class RustTracer extends DockerTracer {
  constructor() {
    super('rs');
  }

  async update(release?: Release) {
    // Wait for the base constructor to finish setting up the image name and directory.
    await Promise.resolve();
    // The Rust tracer library is vendored as a git submodule, so there is no remote release.
    return this.build(release || { tag_name: 'local' });
  }
}
