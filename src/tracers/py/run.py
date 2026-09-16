import inspect

from algorithm_visualizer.tracers.tracer import Tracer
from algorithm_visualizer.types import UNDEFINED

# Make `Tracer.delay()` record the line number of its caller, so the web app can
# highlight the currently executing line. The other tracer libraries do the same.
_original_delay = Tracer.delay.__func__


def _delay(cls, lineNumber=UNDEFINED):
    if lineNumber is UNDEFINED:
        frame = inspect.currentframe()
        if frame is not None and frame.f_back is not None:
            lineNumber = frame.f_back.f_lineno - 1
    return _original_delay(cls, lineNumber)


Tracer.delay = classmethod(_delay)


def main():
    with open('Main.py', encoding='utf-8') as file:
        source = file.read()
    exec(compile(source, 'Main.py', 'exec'), {'__name__': '__main__', '__file__': 'Main.py'})


if __name__ == '__main__':
    main()
