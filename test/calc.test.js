/* global chai describe Rectangle it: true */
var expect = chai.expect;

describe('area() 测试', function(){
  it('宽度和高度是整数', function(){
    var r = new Rectangle(4, 5);
    expect(r.area()).to.be.equal(20);
  });

  it('宽度和高度是小数', function() {
    var r = new Rectangle(0.1, 0.2);
    expect(r.area()).to.be.equal(0.02));
  });

  it('宽度和高度是整数字符串', function() {
    var r = new Rectangle('4', '5');
    expect(r.area()).to.be.equal(20);
  });

  it('宽度和高度都是特殊值 0', function() {
    var r = new Rectangle(0, 0);
    expect(r.area()).to.be.equal(0);
  });

  it('宽度和高度都是非法字符串', function(){
    var r = new Rectangle('a', 'b');
    expect(isNaN(r.area())).to.be.ok;
  });
});

describe('perimeter() 测试', function(){
  it('宽度和高度是整数', function(){
    var r = new Rectangle(4, 5);
    expect(r.perimeter()).to.be.equal(18);
  });

  it('宽度和高度是小数', function() {
    var r = new Rectangle(0.1, 0.2);
    expect(r.perimeter()).to.be.equal(0.6);
  });

  it('宽度和高度是整数字符串', function() {
    var r = new Rectangle('4', '5');
    expect(r.perimeter()).to.be.equal(18);
  });

  it('宽度和高度都是特殊值 0', function() {
    var r = new Rectangle(0, 0);
    expect(r.perimeter()).to.be.equal(0);
  });

  it('宽度和高度都是非法字符串', function(){
    var r = new Rectangle('a', 'b');
    expect(isNaN(r.perimeter())).to.be.ok;
  });
});

describe('validate() 测试', function() {
  it('零是合法数据', function() {
        var result = validate('0');
            expect(result.isOK).to.be.ok;
              
  });

  it('正小数是合法数据', function() {
        var result = validate('4.5');
            expect(result.isOK).to.be.ok;
              
  });

  it('正整数是合法数据', function() {
        var result = validate('45');
            expect(result.isOK).to.be.ok;
              
  });

  it('e 科学计数法是合法数据', function() {
        var result = validate('3.4e3');
            expect(result.isOK).to.be.ok;
              
  });

  it('E 科学计数法是合法数据', function() {
        var result = validate('3.4E3');
            expect(result.isOK).to.be.ok;
              
  });
})
