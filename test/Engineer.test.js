const Engineer = require('../lib/engineer');

describe('Engineer class', () => {
  it('should have name, id, email, and GitHub properties', () => {
    const engineer = new Engineer('James', '396', 'james@james-fisher-web-developer.com', 'jfisher396');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toBe('396');
    expect(engineer.email).toBe('james@james-fisher-web-developer.com');
    expect(engineer.github).toBe('jfisher396');
  });
});
