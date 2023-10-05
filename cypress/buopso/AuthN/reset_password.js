describe.skip(`Test case for ${Cypress.spec["fileName"]}`, () => {
    const request = (setBody) => {
        return cy.request({
            method: "POST",
            url: "http://api.buopso.lcl/auth/v1/reset-password",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: setBody
        });
    };

    const requestBody = (payload) => {
        reqData = {
            password: payload.hasOwnProperty("password") ? payload.password : Cypress.env("password"),
            device: payload.hasOwnProperty("device") ? payload.device : "desktop",
        };
        return reqData
    };

    const successResponse = () => {
        expect(body).has.property("success", true);
        expect(body).has.property("message");
        expect(body).has.property("result");
    };

    const failureResponse = () => {
        expect(body).has.property("success", false);
        expect(body).has.property("message");
        expect(body).has.property("result");
    }

    context(`Success test case for ${Cypress.spec["fileName"]}`, () => {

        it(`test case for create new password`, () => {
            let reqMethod = "POST"
            let reqBody = requestBody({})
            request(reqMethod,reqBody,["qs"]).then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });       
    });

    context(`Failure test case for ${Cypress.spec["fileName"]}`, () => {
        it(`when not provide required field`, () => {
            let reqBody = {}
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when require field left balnk`, () => {
            let reqBody = requestBody({password: ""});
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when password is invalid`, () => {
            let reqBody = requestBody({
                password: "asdf12345gmailcom"
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`password and device should be string`, () => {
            let reqBody = requestBody({
                password:21321334, device: 2321323
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });
    });
});