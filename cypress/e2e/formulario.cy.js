describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://localhost:3000')
  })
  it('Logar com sucesso', () => {
    cy.viewport(1366, 768)
    cy.login('4dt@gmail.com', '4DT')

    cy.contains('h4', 'Formulário').click();

    cy.get('#name').type('Teste user');
    cy.get('#email').type('4dt@gmail.com')
    cy.get('#phone').type('11 999999999').should('have.value', '(11) 99999-9999')
    cy.get('#consultancyType').select('In Company')
    cy.contains('span', 'Pessoa Jurídica').click();
    cy.contains('label', 'Pessoa Física').find('input').should('not.be.checked')
    cy.get('#document').type('12345678900010').should('have.value', '12.345.678/9000-10')

    const redes = ['LinkedIn', 'Udemy', 'YouTube', 'Instagram', 'Indicação de Amigo']

    redes.forEach(rede => {
      cy.contains('label', rede).find('input').check().should('be.checked');
    })

    cy.get('input[type="file"]').selectFile('./cypress/fixtures/header.png', {force: true})

    cy.get('#details').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
    

    const tech = ['React', 'Node.js', 'Python']

    tech.forEach(tech => {
      cy.get('#technologies').type(tech).type('{enter}');
      cy.contains('span', tech).should('be.visible');
    })

    cy.contains('label', 'Li e aceito os').click().find('input').should('be.checked');

    cy.get('button[type="submit"]').click();

    cy.contains('h3', 'Sucesso!')


  })

  it.only('Deve mostrar erros de validação', () => {
    cy.viewport(1366, 768)
    cy.login('4dt@gmail.com', '4DT')

    cy.contains('h4', 'Formulário').click();

    cy.get('button[type="submit"]').click();

    cy.contains('label', 'name').should('contain', 'Campo obrigatório').should('be.visible', 'have.css', 'color', 'rgb(248, 113, 113)')
    // cy.contains('p','Campo obrigatório').should('be.visible', 'have.css', 'color', 'rgb(248, 113, 113)')
    
    cy.contains('p','Campo obrigatório').should('be.visible', 'have.css', 'color', 'rgb(248, 113, 113)')
    cy.contains('p','Você precisa aceitar os termos de uso').should('be.visible', 'have.css', 'color', 'rgb(248, 113, 113)')
  })

 
})