describe('template spec', () => {
  it.only('Logar com sucesso', () => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')
    cy.contains('button', 'Entrar').click();
  })

  it('Campo em branco', () => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000')

    cy.contains('button', 'Entrar').click();

    cy.contains('Ei, não esqueça de digitar seu email!')
    cy.contains('Você precisa de uma senha para entrar! 🔒')    
  }) 
  
  it('Email e Senha invalidos', () => {
    cy.viewport(1366, 768)
    cy.visit('http://localhost:3000')

    cy.get('#email').type('3dt@gmail.com')
    cy.get('#password').type('2DT')
    
    cy.contains('button', 'Entrar').click();

    cy.get('.title').contains('Acesso negado! Tente novamente.') 
  }) 
})