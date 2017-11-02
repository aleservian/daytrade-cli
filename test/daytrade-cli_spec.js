const {exec} = require( 'child_process' );
const {expect} = require('chai');
const pkg = require( '../package.json' );
const daytrade = './index.js';

describe('daytrade cli', ()=>{
  it('Should return version app',done=>{
    exec(`${daytrade} -V` ,(err, stdout, stderr)=> {
      const result = stdout.replace( '\n', '' );
      expect(result).to.eql(pkg.version);
      done(err);
    })
  })
  // it('Command "dolar" value current dolar', done => {
  //   exec(`${daytrade} d` ,(err, stdout, stderr)=> {
  //     done(err);
  //   })
  // })
})