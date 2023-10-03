import requestBody from '../../helper/request'

describe(`Test case for ${Cypress.spec["fileName"]}`, () => {
    let apiUrl = Cypress.env("apiUrl")
    const request = (bodyData) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/auth/v1/login`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: bodyData
        });
    };

    // const requestBody = (payload) => {
    //     let reqData = {
    //         userId: payload.hasOwnProperty("userId") ? payload.userId : "ashish@gmail.com",
    //         password: payload.hasOwnProperty("password") ? payload.password : "ashish@123",
    //         device: payload.hasOwnProperty("device") ? payload.device : "desktop",
    //         force: payload.hasOwnProperty("force") ? payload.force : "false"
    //     };
    //     return reqData
    // };

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
        it(`Generate login token`, () => {
            //  let reqBody = requestBody({})
            // request(reqBody)
            cy.login().then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });

        it.skip(`userId(email) should be case-insensitive`, () => {
            let reqBody = requestBody({ userId: "" })
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                successResponse();
            });
        });
    });

    context.skip(`Failure test case for ${Cypress.spec["fileName"]}`, () => {
        it(`when not provide required field`, () => {
            let reqBody = {}
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when require field left balnk`, () => {
            let reqBody = requestBody({
                userId: "", password: "", device: "", force: ""
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when email is invalid`, () => {
            let reqBody = requestBody({
                userId: "abcxyz.com"
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`when email does not exist`, () => {
            let reqBody = requestBody({
                userId: "asdf12345@gmail.com"
            });
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

        it(`email, password and device should be string`, () => {
            let reqBody = requestBody({
                userId: 123423423, password:21321334, device: 2321323, force: 33454
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });

        it(`force should be boolean`, () => {
            let reqBody = requestBody({
                 force: "33213"
            });
            request(reqBody).then(({ body }) => {
                cy.log(JSON.stringify(body));
                failureResponse();
            });
        });
    });
});