#!/bin/sh
set -e

# Make `Tracer::delay()` record the line number of its caller, so the web app can
# highlight the currently executing line. `line!()` is 1-based, while the editor is 0-based.
sed -E 's/Tracer::delay[[:space:]]*\([[:space:]]*\)/Tracer::delay_at(line!() as i64 - 1)/g' \
  /usr/visualization/Main.rs > /usr/visualization/_Main.rs

rustc /usr/visualization/_Main.rs \
  -O \
  --edition 2018 \
  --extern algorithm_visualizer=/app/algorithm_visualizer/target/release/libalgorithm_visualizer.rlib \
  -L dependency=/app/algorithm_visualizer/target/release/deps \
  -o /usr/visualization/Main

cd /usr/visualization
./Main
