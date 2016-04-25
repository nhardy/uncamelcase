import uncamelCase from '../../src/index';


describe('uncamelcase', () => {

  context('When a non-string value is passed in', () => {

    it('Should ignore falsey values', () => {
      expect(uncamelCase(null)).to.be.null;
    });

    it('Should throw an error if the parameter is not a string', () => {
      expect(() => uncamelCase(() => {})).to.throw(TypeError);
    });

  });

  context('When providing a non-default separator', () => {

    it('Should correctly insert the separator', () => {
      expect(uncamelCase('pseudoKebabCase', '-')).to.equal('Pseudo-Kebab-Case');
    });

  });

  it('Should not insert spaces for an all-uppercase string', () => {
    expect(uncamelCase('FOI')).to.equal('FOI');
  });

  it('Should insert a space for sequence of uppercase followed by lowercase', () => {
    expect(uncamelCase('HTTPProtocol')).to.equal('HTTP Protocol');
  });

  it('Should capitalise the first letter', () => {
    expect(uncamelCase('string')).to.equal('String');
  });

  it('Should convert PascalCase correctly', () => {
    expect(uncamelCase('PascalCase')).to.equal('Pascal Case');
  });

  it('Should not modify a correct value', () => {
    expect(uncamelCase('Test Test')).to.equal('Test Test');
  });

  it('Should not change the first character if it isn\'t a letter', () => {
    expect(uncamelCase('-test')).to.equal('-test');
  });

  it('Should capitalise the first letter', () => {
    expect(uncamelCase('test')).to.equal('Test');
  });

  it('Should split digits to the right of letters', () => {
    expect(uncamelCase('test123')).to.equal('Test 123');
  });

  it('Should not split digits to the left of letters if not capitalised', () => {
    expect(uncamelCase('123test')).to.equal('123test');
  });

  it('Should split digits to the left of letters if capitalised', () => {
    expect(uncamelCase('123Test')).to.equal('123 Test');
  });

  it('Should correctly separate a one-wide stretch of lowercase', () => {
    expect(uncamelCase('tEst')).to.equal('T Est');
  });

});
