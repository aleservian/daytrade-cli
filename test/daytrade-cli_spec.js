const exec = require( 'child_process' ).exec;
const expect = require('chai').expect;
const pkg = require( '../package.json' );
const daytrade = './index.js';

describe('daytrade cli', ()=>{
  it('Should return version app',(done)=>{
    exec(`${daytrade} -V` ,(err, stdout, stderr)=> {
      const result = stdout.replace( '\n', '' );
      expect(result).to.eql(pkg.version);
      done(err);
    })
  })
})