describe(`Test case for Register new user`, () => {
    const { faker } = require('@faker-js/faker');
    let apiUrl = Cypress.env("apiUrl")

    const request = (bodyData) => {
        return cy.request({
            method: "POST",
            url: `${apiUrl}/auth/v1/register`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: bodyData
        });
    };

    const requestBody = (payload) => {
        let reqData = {
            firstName: payload.hasOwnProperty("firstName") ? payload.firstName : faker.person.firstName(),
            lastName: payload.hasOwnProperty("lastName") ? payload.lastName : faker.person.firstName(),
            email: payload.hasOwnProperty("email") ? payload.email : faker.internet.email(),
        };
        return reqData
    };

    context(`Success test case for register new user`, () => {
        it(`Register new user`, () => {
            let reqBody= requestBody({})
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", true);
                expect(body).has.property("message");
                expect(body.result).has.property("userExists");
                expect(body.result).has.property("active");
            })
        })
    });

    context.skip(`Failure test case for register user`, () => {
        it(`Required field not provided`, () => {
            let reqBody= {}
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                // expect(body.result).has.property("userExists");
                // expect(body.result).has.property("active");
            })
        })

        it(`Required field left blank`, () => {
            let reqBody= requestBody({
                firstName: "",
                lastName: "",
                email: ""
            })
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                // expect(body.result).has.property("userExists");
                // expect(body.result).has.property("active");
            })
        })

        it(`firstName, lastName and email should be string`, () => {
            let reqBody= requestBody({
                firstName: 23233,
                lastName: 321312,
                email: 213321333
            })
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                // expect(body.result).has.property("userExists");
                // expect(body.result).has.property("active");
            })
        })

        it(`user already exist`, () => {
            let reqBody= requestBody({
                // firstName: 23233,
                // lastName: 321312,
                email: Cypress.env("userId")
            })
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                // expect(body.result).has.property("userExists");
                // expect(body.result).has.property("active");
            })
        })

        it(`email should be valid`, () => {
            let reqBody= requestBody({
                // firstName: 23233,
                // lastName: 321312,
                email: "ashishshukla.com"
            })
            request(reqBody).then(({body})=>{
                cy.log(JSON.stringify(body))
                expect(body).has.property("success", false);
                expect(body).has.property("message");
                // expect(body.result).has.property("userExists");
                // expect(body.result).has.property("active");
            })
        })
    });
})