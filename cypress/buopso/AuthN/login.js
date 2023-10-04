import {requestBody} from '../../helper/request'

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

    // const requestBody = (payload) => {
    //     let reqData = {
    //         userId: payload.hasOwnProperty("userId") ? payload.userId : "ashish@gmail.com",
    //         password: payload.hasOwnProperty("password") ? payload.password : "ashish@123",
    //         device: payload.hasOwnProperty("device") ? payload.device : "desktop",
    //         force: payload.hasOwnProperty("force") ? payload.force : "false"
    //     };
    //     return reqData
    // };

    const successResponse = (successRes) => {
        expect(successRes).has.property("success", true);
        expect(successRes).has.property("message","Request successful.");
        expect(successRes).has.property("result");
    };

    const failureResponse = (failRes) => {
        expect(failRes).has.property("success", false);
        expect(failRes).has.property("message");
        expect(failRes).has.property("result");
    }

    context(`Success test case for ${Cypress.spec["fileName"]}`, () => {
        it(`Generate login token`, () => {
             let reqBody = requestBody({})
            request(reqBody)
            // cy.login()
            .then(({body,status,headers}) => {
                 let set_cookie = Object.values(headers)
                // console.log("111Headers1111",body)
                 cy.log(set_cookie[8]);
                // console.log(headers.getSetCookie())
                //   cy.log("------set_cookie------",set_cookie);
                //   expect(headers).has.deep.property("x-powered-by",headers.get("x-powered-by"));
                // expect(status,"Status").to.be.eq(200)
                // successResponse(body);
            });
        });

        it.skip(`userId(email) should be case-insensitive`, () => {
            let reqBody = requestBody({ userId: "ABHINAV.KHANDUJA@BUOPSO.COM" })
            request(reqBody).then(({ body,status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(200)
                successResponse(body);
            });
        });
    });

    context.skip(`Failure test case for ${Cypress.spec["fileName"]}`, () => {
        it(`when not provide required field`, () => {
            let reqBody = {}
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(400)
                failureResponse(body);
            });
        });

        it(`when require field left balnk`, () => {
            let reqBody = requestBody({
                userId: "", password: "", device: "", force: ""
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(400)
                failureResponse(body);
            });
        });

        it(`when email is invalid`, () => {
            let reqBody = requestBody({
                userId: "abcxyz.com"
            });
            request(reqBody).then(({ body,status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(401)
                failureResponse(body);
            });
        });

        it(`when email does not exist`, () => {
            let reqBody = requestBody({
                userId: "asdf12345@gmail.com"
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(401)
                failureResponse(body);
            });
        });

        it(`when password is invalid`, () => {
            let reqBody = requestBody({
                password: "asdf12345gmailcom"
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(401)
                failureResponse(body);
            });
        });

        it(`email, password and device should be string`, () => {
            let reqBody = requestBody({
                userId: 123423423, password:21321334, device: 2321323, force: 33454
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(401)
                failureResponse(body);
            });
        });

        it(` device should be string`, () => {
            let reqBody = requestBody({
                device: 2321323, force: 33454
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(400)
                failureResponse(body);
            });
        });

        it(`force should be boolean`, () => {
            let reqBody = requestBody({
                 force: "33213"
            });
            request(reqBody).then(({ body, status }) => {
                cy.log(JSON.stringify(body));
                expect(status,"Status").to.be.eq(400)
                failureResponse(body);
            });
        });
    });
});