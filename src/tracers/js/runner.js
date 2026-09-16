const fs = require('fs');
const AlgorithmVisualizer = require('algorithm-visualizer');

const inputPath = '/usr/visualization/Main.js';
const outputPath = '/usr/visualization/visualization.json';

const code = fs.readFileSync(inputPath, 'utf8')
  .split('\n')
  .map((line, i) => line.replace(/(\.\s*delay\s*)\(\s*\)/g, `$1(${i})`))
  .join('\n');

AlgorithmVisualizer.Commander.init();

const sandboxRequire = name => ({ 'algorithm-visualizer': AlgorithmVisualizer }[name]);
new Function('require', code)(sandboxRequire);

fs.writeFileSync(outputPath, JSON.stringify(AlgorithmVisualizer.Commander.commands));
