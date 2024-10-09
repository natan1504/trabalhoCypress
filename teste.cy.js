describe('Teste de Pedido no Buger Eats', () => {
  it('Deve fazer um pedido com sucesso', () => {
    // Acessa o site
    cy.visit('https://buger-eats.vercel.app/');

    // Clica no botão para fazer cadastro
    cy.get('a[href="/deliver"]').click();

    // // Preenche os campos do formulário
    cy.get('input[name="name"]').type('João Pereira');
    // cy.get('input[name="email"]').type('cliente@example.com');
    // cy.get('input[name="whatsapp"]').type('11987654321');
    // cy.get('input[name="address.street"]').type('Rua Exemplo');
    // cy.get('input[name="address.number"]').type('123');
    // cy.get('input[name="address.neighborhood"]').type('Bairro Exemplo');
    // cy.get('input[name="address.city"]').type('Cidade Exemplo');
    // cy.get('input[name="address.state"]').type('Estado Exemplo');
    
  
  });
});
