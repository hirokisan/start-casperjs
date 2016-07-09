var casper = require('casper').create();
casper.userAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.30 (KHTML, like Gecko) Chrome/12.0.742.112 Safari/534.30');

casper.start('http://localhost:8080/', function(){
    this.fill('#form', {
      '1':    'I am watching you',
      '2':    'hello',
    }, true);
  if (this.exists('#submit')) {
    this.echo('found #submit');
  }
  if (this.click('#submit')) {
    this.echo('click #submit');
  }
  this.wait(3000, function() {
    this.echo("I've waited for a second.");
    this.echo(this.getCurrentUrl());
    this.captureSelector('thanks.png', 'html');
  });
});


casper.run();

