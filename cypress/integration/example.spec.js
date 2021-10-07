
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('displays an error when no pokemon is selected', ()=>{
            cy.get('#play-button').click();
            cy.get('#error').should('be.visible');
        });
    });

    describe('HTML elements', ()=>{   
        it('displays a win, lose, or tie result for user choice: grass', ()=>{
            cy.get('#bulb-img').click();
            cy.get('#play-button').click();
            cy.get('#result').should('be.visible');
        });
    });

    describe('HTML elements', ()=>{   
        it('displays a win, lose, or tie result for user choice: fire', ()=>{
            cy.get('#char-img').click();
            cy.get('#play-button').click();
            cy.get('#result').should('be.visible');
        });
    });

    describe('HTML elements', ()=>{   
        it('displays a win, lose, or tie result for user choice: Squirtle', ()=>{
            cy.get('#squi-img').click();
            cy.get('#play-button').click();
            cy.get('#result').should('be.visible');
        });
    });
});