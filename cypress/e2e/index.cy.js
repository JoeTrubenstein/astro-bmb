it('titles are correct', () => {
    const page = cy.visit('http://localhost:3000');
  
    page.get('title').should('have.text', 'Bald Man Brands')
    page.get('h1').should('have.text', 'Bald Man Brands');
  });