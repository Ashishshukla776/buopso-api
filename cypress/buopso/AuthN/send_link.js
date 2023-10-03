describe(`Test case of ${Cypress.spec["fileName"]} for reset password`, () => {
    const request = (setQs) => {
       return cy.request ({
            method: "GET",
            url: "http://api.buopso.lcl/auth/v1/reset-password",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            qs : setQs
        });
    };

    const query = (payload)=>{
        queryData ={
            id:payload.hasOwnProperty("data") ? payload.data :Cypress.env("userId"),
        }
        return queryData
    };

    const successResponse = () => {
        expect(body).has.property("success", true).to.be.boolean;
        expect(body).has.property("message").to.be.string;
        expect(body).has.property("result").to.be.string;
    };

    const failureResponse = () => {
        expect(body).has.property("success", false);
        expect(body).has.property("message");
        expect(body).has.property("result");
    }

    context(`Success test case of ${Cypress.spec["fileName"]} for reset password`, () => {
        it(`test case for send reset password link`, () => {
            let reqQs = query({})
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });      
    });

    context(`Failure test case of ${Cypress.spec["fileName"]} for reset password`, () => {
        it(`when not provide required field`, () => {
            let reqQs = {}
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when require field left balnk`, () => {
            let reqQs = query({id: ""});
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when email(id) is invalid`, () => {
            let reqQs = query({
                id: "asdf12345gmailcom"
            });
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`When email does not exist`, () => {
            let reqQs = query({
                id:"asdf12345@gmailcom"
            });
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`email should be string`, () => {
            let reqQs = query({
                id:2312323
            });
            request(reqQs).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });
    });
});