describe('Validate Header', () => {
    it('Succesfully  validate content type', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
        .should('include', 'application/json; charset=utf-8')
    });
    describe("Test Pokemon API", () => {
        it("should return correct data from API", () => {
          cy.request("https://pokeapi.co/api/v2/pokemon/ditto").then((response) => {
            expect(response.status).to.equal(200);
            expect(response.headers["content-type"]).to.include("application/json");
            expect(response.body).to.have.property("name");
            expect(response.body).to.have.property("base_experience");
            expect(response.body.name).to.be.a("string");
            expect(response.body.base_experience).to.be.a("number");
            expect(response.body.name).to.equal("ditto");
            expect(response.body.base_experience).to.equal(101);
          });
        });
      });
      
})