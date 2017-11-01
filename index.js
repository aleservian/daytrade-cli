#!/usr/bin/env node
const program = require('commander');
const pkg = require( './package.json' );
const dolar = require('./src/dolar');

program.version(pkg.version)

program
  .command('dolar')
  .description('Get current value dolar')
  .alias('d')
  .action(dolar)

program.parse(process.argv);