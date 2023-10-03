describe(`Test case of ${Cypress.spec["fileName"]} and renew-token`, () => {
    const request = (setUrl) => {
       return cy.request ({
            method: "GET",
            url: setUrl,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        });
    };

    const successResponse = () => {
        expect(body).has.property("success", true).to.be.boolean;
        expect(body).has.property("message").to.be.string;
        // expect(body).has.property("result").to.be.string;
    };

    const failureResponse = () => {
        expect(body).has.property("success", false);
        expect(body).has.property("message");
        // expect(body).has.property("result");
    }

    context(`Success test case of ${Cypress.spec["fileName"]} for reset password`, () => {
        it.skip(`test case for validate-token`, () => {
            let reqUrl = "http://api.buopso.lcl/auth/v1/validate-token"
            request(reqUrl).then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });   
        
        it(`test case for renew-token`, () => {
            let reqUrl = "http://api.buopso.lcl/auth/v1/renew-token"
            request(reqUrl).then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });
    });
});