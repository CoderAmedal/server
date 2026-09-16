import { DockerTracer } from 'tracers/DockerTracer';
import { Release } from 'tracers/Tracer';

// `tracers.py` does not publish GitHub releases, so the image is built from a pinned commit.
const TRACERS_PY_COMMIT = '62193206d4e173b86f6714946bacae900b8d5c7d';

export class PythonTracer extends DockerTracer {
  constructor() {
    super('py');
  }

  async update(release?: Release) {
    // Wait for the base constructor to finish setting up the image name and directory.
    await Promise.resolve();
    return this.build(release || { tag_name: TRACERS_PY_COMMIT });
  }
}
