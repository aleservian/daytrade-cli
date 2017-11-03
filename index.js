#!/usr/bin/env node
const program = require('commander');
const pkg = require( './package.json' );
const actionDolar = require('./src/actions/dolar');
const bovespaFuturos = require('./src/actions/bovespaFuturos');

program.version(pkg.version)

program
  .command('dolar')
  .description('Get current value dolar')
  .option('-r, --days-range', `Day's Range`)
  .option('-p, --prev-close', `Prev. Close`)
  .option('-o, --open', `Open`)
  .alias('d')
  .action(actionDolar)

program
  .command('bovespaFuturos')
  .description('Get current value dolar')
  .option('-r, --days-range', `Day's Range`)
  .option('-p, --prev-close', `Prev. Close`)
  .option('-o, --open', `Open`)
  .alias('bf')
  .action(bovespaFuturos)

program.parse(process.argv);