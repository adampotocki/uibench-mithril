import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';

export default {
  entry: 'src/app.js',
  plugins: [
    buble(),
    nodeResolve({ browser: true }),
    commonjs({ include: 'node_modules/**' })
  ].concat(
    filesize(), // Show filesize of prod bundle
    uglify({}, minify) // Minify bundle
  ),
  targets: [{
    format: 'iife',
    dest: 'build/build.js'
  }]
};
