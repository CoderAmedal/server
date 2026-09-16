#!/bin/sh
set -e

rustc /usr/visualization/Main.rs \
  -O \
  --edition 2018 \
  --extern algorithm_visualizer=/app/algorithm_visualizer/target/release/libalgorithm_visualizer.rlib \
  -L dependency=/app/algorithm_visualizer/target/release/deps \
  -o /usr/visualization/Main

cd /usr/visualization
./Main
