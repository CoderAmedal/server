#!/bin/sh
set -e

# Make `Tracer.delay()` record the line number of its caller, so the web app can
# highlight the currently executing line. Java has no `__LINE__`, so inject the
# 0-based line number (the editor is 0-based) with awk.
awk '{ line=$0; gsub(/Tracer[[:space:]]*\.[[:space:]]*delay[[:space:]]*\([[:space:]]*\)/, "Tracer.delay(" NR-1 ")", line); print line }' \
  Main.java > _Main.java

javac -cp /app/classes:/app/gson.jar -d . _Main.java
java -Djava.awt.headless=true -cp .:/app/classes:/app/gson.jar Main
