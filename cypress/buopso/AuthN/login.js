import { requestBody } from '../../helper/request'

describe(`Test case for ${Cypress.spec["fileName"]}`, () => {

    let apiUrl = Cypress.env("apiUrl")
    const request = (bodyData) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/auth/login`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: bodyData,
            failOnStatusCode: false
        });
    };

    const successResponse = (successRes) => {
        expect(successRes).has.property("success", true).to.be.a("boolean");
        expect(successRes).has.property("message", "Request successful.").to.be.a("string");
        expect(successRes).has.property("result").to.be.a("string");
    };

    const failureResponse = (failRes,resStatus,validateStatus,errorMsg) => {
        cy.log(JSON.stringify(failRes));
        // expect(resStatus, "Status").to.be.eq(validateStatus)
        // expect(failRes).has.property("success", false).to.be.a("boolean");
        // expect(failRes).has.property("message",errorMsg).to.be.a("string");
        // expect(failRes).has.property("result").to.be.a("string");
    }

    context(`Success test case for ${Cypress.spec["fileName"]}`, () => {
         let renew_token
        it(`Test case of generate login token`, () => {
            let reqBody = requestBody({})
            request(reqBody).then(({ body, status, headers  }) => {
                let set_cookie = Object.values(headers)
                cy.log(JSON.stringify(body));
                expect(status, "Status").to.be.eq(200)
                successResponse(body);
                cy.request ({
                    method: "GET",
                    url: "http://api.buopso.lcl/auth/renew",
                    headers: { Authorization: set_cookie[8] }
                }).then(({ body, status }) => {
                   renew_token = body.result.token
                    cy.log(JSON.stringify(body));
                    expect(status, "Status").to.be.eq(200)
                    expect(body).has.property("success", true).to.be.a("boolean");
                    expect(body).has.property("message").to.be.a("string");   
                    expect(body.result).has.property("token").to.be.a("string"); 
                    expect(body.result).has.property("expiresOn").to.be.a("string"); 
                    cy.request({
                        method: "GET",
                        url: "http://api.buopso.lcl/auth/validate",
                        headers: { Authorization: "Bearer " + renew_token }
                    }).then(({ body, status }) => {
                        cy.log(JSON.stringify(body));
                        expect(status, "Status").to.be.eq(200)
                        expect(body).has.property("success", true).to.be.a("boolean");
                        expect(body).has.property("message","Request successful.").to.be.a("string");
                        expect(body).has.property("result","token is valid").to.be.a("string");
                    });          
                });
            });
        });

        it(`userId(email) should be case-insensitive`, () => {
            let reqBody = requestBody({ uid: "ASHISH.SHUKLA@BUOPSO.COM" })
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(reqBody));
                cy.log(JSON.stringify(body));
                expect(status, "Status").to.be.eq(200)
                successResponse(body);
            });
        });

        it.skip(`test case for logout`, () => {
            cy.request ({
                method: "GET",
                url: "http://api.buopso.lcl/auth/logout",
                headers: { Authorization: "Bearer " + renew_token  }
            }).then(({ body, status }) => {
              
                cy.log(JSON.stringify(body));
                // expect(status, "Status").to.be.eq(200)
                // expect(body).has.property("success", true).to.be.a("boolean");
                // expect(body).has.property("message").to.be.a("string");   
                // expect(body.result).has.property("token").to.be.a("string"); 
                // expect(body.result).has.property("expiresOn").to.be.a("string");           
            });
        });
    });

    context(`Failure test case for ${Cypress.spec["fileName"]}`, () => {
        it(`when not provide required field`, () => {
            let reqBody = {}
            request(reqBody).then(({ body, status }) => {
                let statusCode = 400
                let errMsg = "Username and password are required"
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it(`when uid(email) left balnk`, () => {
            let reqBody = requestBody({ uid: "" });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 400
                let errMsg = "Username and password are required"
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it(`when password left balnk`, () => {
            let reqBody = requestBody({ password: "" });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 400
                let errMsg = "Username and password are required"
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it(`when email is invalid`, () => {
            let reqBody = requestBody({ uid: "abcxyz.com" });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 401
                let errMsg = "Invalid user."
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it(`when email does not exist`, () => {
            let reqBody = requestBody({ uid: "asdf123@gmail.com" });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 401
                let errMsg = "Invalid user."
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it(`when password is invalid`, () => {
            let reqBody = requestBody({ password: "asdfqw12345" });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 401
                let errMsg = "Invalid username or password."
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it.skip(`email should be string`, () => {
            let reqBody = requestBody({
                uid: 123423423
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                // expect(status, "Status").to.be.eq(401)
                // failureResponse(body);
            });
        });

        it(`password should be string`, () => {
            let reqBody = requestBody({ password: 21321334 });
            request(reqBody).then(({ body, status }) => {
                let statusCode = 400
                let errMsg = "Something went wrong."
                failureResponse(body, status, statusCode,errMsg);
            });
        });

        it.skip(`device should be string`, () => {
            let reqBody = requestBody({
                device: 2321323, force: 33454
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                // expect(status, "Status").to.be.eq(400)
                // failureResponse(body);
            });
        });

        it.skip(`force should be boolean`, () => {
            let reqBody = requestBody({
                force: "33213"
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                // expect(status, "Status").to.be.eq(400)
                // failureResponse(body);
            });
        });
    });
});